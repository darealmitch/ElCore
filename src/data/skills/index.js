import { elswordSkills } from "./elswordSkills.js";
import { addSkills} from "./addSkills.js";
import { elswordClassSkills } from "/src/data/classSkills/elswordClassSkills.js";
import { addClassSkills } from "../classSkills/addClassSkills.js";
import { ravenSkills } from "./ravenSkills.js";
import { ravenClassSkills } from "../classSkills/ravenClassSkills.js";
import { chungSkills } from "../skills/chungSkills.js";
import {chungClassSkills} from "../classSkills/chungClassSkills.js";

export const skills = [

    ...elswordSkills,
    ...addSkills,
    ...ravenSkills,
    ...chungSkills

];
export const classSkills = [
    ...elswordClassSkills,
    ...addClassSkills,
    ...ravenClassSkills,
    ...chungClassSkills
];
