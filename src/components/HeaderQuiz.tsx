import Keyboard from "./Keyboard";
import { useState } from "react";

/*
"C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A5", "A#5", "B5",
"C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A6", "A#6", "B5"
*/

const MajorTriads: Record<string,string[]> = {
    C: ["C4", "E4", "G4"],
    D: ["D4", "F#4", "A5"],
    E: ["E4", "G4", "B5"],
    F: ["F4", "A5", "C5"],
    G: ["G4", "B5", "D5"],
    A: ["A5", "C#5", "E5"],
    B: ["B5", "D5", "F5"]
};
function getRandomRoot() {
    const roots = ["C", "D", "E", "F", "G", "A", "B"]
    const index = Math.floor(Math.random() * roots.length);
    return roots[index];
}


function HeaderQuiz() {

    const [currentRoot, setCurrentRoot] = useState(getRandomRoot());

    const highlightKeys = MajorTriads[currentRoot];
    
    return (
        <div>
            <Keyboard highlightKeys={highlightKeys} />

            <button onClick={() => setCurrentRoot(getRandomRoot())}>
                Next
            </button>
        </div>
    );
}

const MinorTriad: Record<string,string[]> = {
    C: ["C4", "D#4", "G4"],
    D: ["D4", "F4", "A5"],
    E: ["E4", "F#4", "B5"],
    F: ["F4", "G#", "C5"],
    G: ["G4", "A", "D5"],
    A: ["A5", "C", "E5"],
    B: ["B5", "C#", "F5"]
};

export default HeaderQuiz;