import { elswordSkills } from "./elswordSkills.js";
import { addSkills} from "./addSkills.js";
import { elswordClassSkills } from "/src/data/classSkills/elswordClassSkills.js";
import {addClassSkills} from "../classSkills/addClassSkills.js";

export const skills = [

    ...elswordSkills,
    ...addSkills

];
export const classSkills = [
    ...elswordClassSkills,
    ...addClassSkills

];
