import './Ad.css';

interface Props {
    flavor:string;
    fontSize:number;
    darkTheme:boolean;
}

function Ad({flavor,fontSize,darkTheme}:Props) {
    let themeClass = "";
    if(darkTheme === true) {
        themeClass = ' darkTheme'
    }
    const styles = {
        fontSize:fontSize +"px"
    }
    return (
        <div className='Ad'>
            <div className={'display-div' +themeClass}>
                <p>Vote for</p>
                <p style={styles}>{flavor}</p>
            </div>
        </div>
    )
}

export default Ad