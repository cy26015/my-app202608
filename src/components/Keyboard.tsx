import "./Keyboard.css"

function Keyboard() {
    const notes: string[] = [
        "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A5", "A#5", "B5",
        "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A6", "A#6", "B5"
    ];

    const blackKeyOffsets = {
        "C#4":40 - 12,
        "D#4":40 * 2 - 12,
        "F#4":40 * 4 - 12,
        "G#4":40 * 5 - 12,
        "A#5":40 * 6 - 12,
        "C#5":40 * 8 - 12,
        "D#5":40 * 9 - 12,
        "F#5":40 * 11 - 12,
        "G#5":40 * 12 - 12,
        "A#6":40 * 13 - 12,
    }

    const keys = notes.map((note, index) => {
        const type = note.includes("#") ? "black" : "white";
        return {
            note: note,
            index: index,
            type: type
        };
    })

    return (
        <div className="keyboard">
            {keys.map((key) => (
                <div
                    key={key.index}
                    className={key.type === "white" ? "white-key" : "black-key"}
                    style={
                        key.type === "black" ? { left: `${blackKeyOffsets[key.note]}px` } : {}
                    }
                ></div>
            ))}
        </div>
    );

}

export default Keyboard;
