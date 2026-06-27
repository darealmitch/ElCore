import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { classImages } from "../../data/classImages";
import { characters } from "../../data/characters";
import { characterThemes } from "../../data/characterThemes";
import { masterSymbols } from "../../data/masterSymbols";
import { getClassUrl } from "../../utils/classRoutes";
import Portrait from "./Portrait";

const stageLabels = {
    job1: "1re spé",
    job2: "2e spé",
    job3: "3e spé",
    master: "Maître",
};
const stageOrder = ["job1", "job2", "job3", "master"];

function groupClassImagesByPath(characterId) {
    const characterClasses = classImages.filter((item) => item.characterId === characterId);
    return characterClasses.reduce((groups, item) => {
        const existingGroup = groups.find((group) => group.pathName === item.pathName);
        if (existingGroup) {
            existingGroup.stages.push(item);
            return groups;
        }
        return [...groups, { pathName: item.pathName, pathNameFr: item.pathNameFr, stages: [item] }];
    }, []).map((group) => ({
        ...group,
        stages: [...group.stages].sort((a, b) => stageOrder.indexOf(a.jobStage) - stageOrder.indexOf(b.jobStage)),
    }));
}

function ClassPathTimeline({ characterId }) {
    const theme = characterThemes[characterId];
    const character = characters.find((item) => item.id === characterId);
    const paths = groupClassImagesByPath(characterId);
    const [activePathName, setActivePathName] = useState(paths[0]?.pathName ?? null);
    const friseRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const selected = paths.find((path) => path.pathName === activePathName) ?? paths[0];

    // GSAP : tracé progressif des connecteurs à chaque changement de chemin
    useLayoutEffect(() => {
        if (!friseRef.current || reduceMotion) return undefined;
        const connectors = friseRef.current.querySelectorAll(".cp-conn-fill");
        const ctx = gsap.context(() => {
            gsap.fromTo(connectors, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", duration: 0.45, ease: "power2.out", stagger: 0.12, delay: 0.15 });
        }, friseRef);
        return () => ctx.revert();
    }, [activePathName, reduceMotion]);

    if (paths.length === 0) {
        return (
            <article className="detail-card">
                <h2>Informations de classes</h2>
                <p>Aucune spécialisation n’a encore été ajoutée pour ce personnage.</p>
            </article>
        );
    }

    const style = { "--c": theme.primary, "--c2": theme.secondary, "--glow": theme.glow };
    const nodeVariants = {
        hidden: { opacity: 0, y: 14 },
        show: (i) => ({ opacity: 1, y: 0, transition: { delay: reduceMotion ? 0 : 0.06 * i, duration: 0.35, ease: "easeOut" } }),
    };

    return (
        <section className="cp" style={style}>
            {/* Carte de branches — sélecteur */}
            <div className="cp-map">
                <div className="cp-map-base">
                    <span className="cp-map-base-node">{character?.name?.charAt(0)}</span>
                    <span className="cp-map-base-label">Base</span>
                </div>
                <div className="cp-map-lanes">
                    {paths.map((path) => {
                        const isActive = path.pathName === selected.pathName;
                        return (
                            <button
                                type="button"
                                key={path.pathName}
                                className={isActive ? "cp-lane is-active" : "cp-lane"}
                                onClick={() => setActivePathName(path.pathName)}
                                aria-pressed={isActive}
                            >
                                <span className="cp-lane-name">{path.pathNameFr || path.pathName}</span>
                                <span className="cp-lane-chain" aria-hidden="true">
                                    {path.stages.map((stage, index) => (
                                        <span key={stage.jobStage} className="cp-lane-step">
                                            {index > 0 && <span className="cp-lane-seg" />}
                                            <span className={stage.jobStage === "master" ? "cp-pip cp-pip-master" : "cp-pip"} />
                                        </span>
                                    ))}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Frise focalisée du chemin sélectionné */}
            <useReducedMotion mode="wait">
                <motion.div
                    key={selected.pathName}
                    ref={friseRef}
                    className="cp-frise"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.div className="cp-node cp-node-base" custom={0} variants={nodeVariants} initial="hidden" animate="show">
                        <div className="cp-pic cp-pic-base">
                            <Portrait src={character.image} alt={character.name} mode="contain" />
                        </div>
                        <span className="cp-stage">Base</span>
                        <span className="cp-name">{character.name}</span>
                    </motion.div>

                    {selected.stages.map((stage, index) => {
                        const masterLogo = stage.jobStage === "master" ? masterSymbols[stage.characterId] : null;
                        const isMaster = stage.jobStage === "master";
                        return (
                            <Fragment key={`${stage.pathName}-${stage.jobStage}`}>
                                {isMaster ? (
                                    <div className="cp-band" aria-hidden="true"><span>Classe de Maître</span></div>
                                ) : (
                                    <span className="cp-conn" aria-hidden="true"><span className="cp-conn-fill" /></span>
                                )}
                                <motion.div className={isMaster ? "cp-node cp-node-master" : "cp-node"} custom={index + 1} variants={nodeVariants} initial="hidden" animate="show">
                                    <Link to={getClassUrl(stage)} className="cp-node-link">
                                        <div className={isMaster ? "cp-pic cp-pic-master" : "cp-pic"}>
                                            {masterLogo && <img className="cp-master-logo" src={masterLogo.image} alt={masterLogo.alt} loading="lazy" />}
                                            <Portrait src={stage.localPath} alt={stage.alt} mode="contain" />
                                        </div>
                                        <span className="cp-stage">{stageLabels[stage.jobStage] || stage.jobStage}</span>
                                        <span className="cp-name">{stage.classNameFr || stage.className}</span>
                                    </Link>
                                </motion.div>
                            </Fragment>
                        );
                    })}
                </motion.div>
            </useReducedMotion>
        </section>
    );
}

export default ClassPathTimeline;
