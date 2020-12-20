import React,{useState} from 'react';

const ProductAddScreen = () => {
    const [data, setData] = useState('');
    const [like, setLike] = useState([]);
    const [colors, setColors] = useState('');
    const [agender, setGender] = useState('');


    function handleinput(e) {
        const { name } = e.target;
        const { checked } = e.target;
        if (name === "data") {
            console.log(e.target);
            setData(e.target.value);
        } else if (name === "gender") {
            setGender(e.target.value);
        } else if (name === "color") {
            setColors(e.target.value);
        } else if (name === 'likes' && checked) {
            const ischecked = like.some((lk) => {
                return e.target.value === lk
            });
            //setLike([...like,e.target.value]);       }
            console.log(ischecked);
            if (!ischecked) {
                setLike([...like, e.target.value]);
            }
        }
    }
    return (
        <>
            <div>
                <form>
                    <label>Enter your crap
                    <input type="text" autoComplete="off" name="data" onChange={handleinput} value={data} />
                    </label><br />
                    <label> Select your likes <br />
                        <label>Swimming: <input type="checkbox" name="likes" value="Swimming" onChange={handleinput} /><br /></label>
                        <label>Climbing: <input type="checkbox" name="likes" value="Climbing" onChange={handleinput} /><br /></label>
                        <label>Chucking: <input type="checkbox" name="likes" value="Chucking" onChange={handleinput} /><br /></label>
                    </label>
                    <label> Select your gender
        <br /><label>Male: <input type="radio" name="gender" value="M" onChange={handleinput} /><br /></label>
                        <label>Female: <input type="radio" name="gender" value="F" onChange={handleinput} /><br /></label>
                    </label>
                    <label> Select your fav color
                    <select name="color" onChange={handleinput}>
                            <option value="Black">Black</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                        </select>
                    </label><br />
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <div>
                Entered Text :{data}<br />
                Entered Gender : {agender} <br />
                Entered Color : {colors} <br />
                {like}

            </div>
        </>
    );
}
export default ProductAddScreen;