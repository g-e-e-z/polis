export const TextBasedChannel = () => {
    const messages = [
        { id: "1", content: "m1" },
        { id: "2", content: "m2" }
    ];

    return (
        <div>
            <div id="messages">
                {/* */}
                {messages.map(m => <div key={m.id}>{m.content}</div>)}
            </div>
        </div>
    )
}
