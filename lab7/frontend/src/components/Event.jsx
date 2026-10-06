const MyButton = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <button
            style={{ height: "40px", width: "100px" }}
            onClick={handleClick}
        >
            Click Me
        </button>
    );
};

const Event = () => {
    return (
        <div>
            <h1>Event Handling Example</h1>
            <MyButton />
        </div>
    );
};

export default Event;