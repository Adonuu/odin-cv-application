import '../styles/addButton.css';

export function AddButton({handleOnClick}) {
    return (
        <>
            <button onClick={handleOnClick}>Add</button>
        </>
    );
}