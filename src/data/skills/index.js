import { elswordSkills } from "./elswordSkills.js";
import { addSkills} from "./addSkills.js";
import { elswordClassSkills } from "/src/data/classSkills/elswordClassSkills.js";
import { addClassSkills } from "../classSkills/addClassSkills.js";
import { ravenSkills } from "./ravenSkills.js";
import { ravenClassSkills } from "../classSkills/ravenClassSkills.js";
import { chungSkills } from "../skills/chungSkills.js";
import {chungClassSkills} from "../classSkills/chungClassSkills.js";
import {renaSkills} from "./renaSkills.js";
import {renaClassSkills} from "../classSkills/renaClassSkills.js";
import {aishaClassSkills} from "../classSkills/aishaClassSkills.js";
import {aishaSkills} from "./aishaSkills.js";
import {eveSkills} from "./eveSkills.js";
import {eveClassSkills} from "../classSkills/eveClassSkills.js";

export const skills = [

    ...elswordSkills,
    ...addSkills,
    ...ravenSkills,
    ...chungSkills,
    ...renaSkills,
    ...aishaSkills,
    ...eveSkills

];
export const classSkills = [
    ...elswordClassSkills,
    ...addClassSkills,
    ...ravenClassSkills,
    ...chungClassSkills,
    ...renaClassSkills,
    ...aishaClassSkills,
    ...eveClassSkills
];
