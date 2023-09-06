export default function Singers({singer}){

    return (
        <div style={{
            backgroundColor:"blueviolet",
            padding: '10px',
            marginBottom: "5px",
        }}>
            <h4>Name: {singer.name}</h4>
            <p>Age: {singer.age}</p>
        </div>
    )
}