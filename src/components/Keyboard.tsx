function Keyboard() {
    const notes: string[] = [
        "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4",
        "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5"
    ];

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
                        key.type === "black" ? { left: `${key.index * 40 -12}px` } : {}
                    }
                ></div>
            ))}
        </div>
    );

}

export default Keyboard;
