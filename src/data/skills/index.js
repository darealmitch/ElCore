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
import {araSkills} from "./araSkills.js";
import {araClassSkills} from "../classSkills/araClassSkills.js";
import {elesisSkills} from "./elesisSkills.js";
import {elesisClassSkills} from "../classSkills/elesisClassSkills.js";
import {luSkills} from "./luSkills.js";
import {luClassSkills} from "../classSkills/luClassSkills.js";
import {roseSkills} from "./roseSkills.js";
import {roseClassSkills} from "../classSkills/roseClassSkills.js";
import {ainSkills} from "./ainSkills.js";
import {ainClassSkills} from "../classSkills/ainClassSkills.js";

export const skills = [

    ...elswordSkills,
    ...addSkills,
    ...ravenSkills,
    ...chungSkills,
    ...renaSkills,
    ...aishaSkills,
    ...eveSkills,
    ...araSkills,
    ...elesisSkills,
    ...luSkills,
    ...roseSkills,
    ...ainSkills,

];
export const classSkills = [
    ...elswordClassSkills,
    ...addClassSkills,
    ...ravenClassSkills,
    ...chungClassSkills,
    ...renaClassSkills,
    ...aishaClassSkills,
    ...eveClassSkills,
    ...araClassSkills,
    ...elesisClassSkills,
    ...luClassSkills,
    ...roseClassSkills,
    ...ainClassSkills,
];
