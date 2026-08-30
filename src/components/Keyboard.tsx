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
        <div>
            {keys.map((key) => {
                return (
                    <div key={key.index}>
                        {key.note} - {key.type}
                    </div>
                );
            })}
        </div>
    );
}

export default Keyboard;
