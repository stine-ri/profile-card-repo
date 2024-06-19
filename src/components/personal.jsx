

const Personal = ({ name, moreDetails, isTall, height}) => {
    return (
        <>
        <div className="profile-info">
            <h2>I'm {name}</h2>
            <p>My age is {moreDetails.age}</p>
            <p>{isTall ? "I'm tall " : "i'm not tall"}</p>
            <p> {moreDetails.bio}</p>
        </div>
        </>
    )

}

export default Personal