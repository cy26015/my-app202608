import "./Keyboard.css"

function Keyboard() {
    const notes: string[] = [
        "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A5", "A#5", "B5",
        "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A6", "A#6", "B5"
    ];

    const blackKeyOffsets: Record<string, number> = {
        "C#4":40 - 12,
        "D#4":40 * 2 - 10,
        "F#4":40 * 4 - 8,
        "G#4":40 * 5 - 7,
        "A#5":40 * 6 - 6,
        "C#5":40 * 8 - 3,
        "D#5":40 * 9 - 2,
        "F#5":40 * 11 + 1,
        "G#5":40 * 12 + 2,
        "A#6":40 * 13 + 4,
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
