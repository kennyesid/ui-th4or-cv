import { useEffect, useRef } from "react";
import { firestore } from '../backgroundFound/Senddb';
import { addDoc, collection } from "firebase/firestore";

const HomeHeader = ({ language, redirectPageWhatsapp, redirectPageLinkedin, redirectPageGitHub }) => {

    const getAllDate = new Date();
    const getDate = getAllDate.getDate();
    const getMonth = getAllDate.getMonth();

    const ref = collection(firestore, getDate.toString() + '-' + getMonth.toString() + '-' + '2024');

    useEffect(() => {

        const xmas95 = new Date();

        let data = {
            message: xmas95,
        };
        try {
            addDoc(ref, data);
        } catch (ex) {
            console.log('exception: ', ex.message);
        }
    }, [])


    return (
        <>
            <div className="home-img">
                <h1>{language.home.title} <span>Yesid</span></h1>
                <h3><span>FullStack</span> Developer</h3>
                <img className='home-img-principal' src="me-portafolio.png" alt="" />
                <div className='social-icons'>
                    <h2 className='social-icons-h2'>{language.home.contactMe}</h2>
                    <h3>Favor de contactarse con mi persona por los siguientes medios para poder enviarle mi CV con las respectivas referencias.</h3>
                    <img onClick={redirectPageWhatsapp} src="icon-whatsapp-4.svg" />
                    <img onClick={redirectPageLinkedin} src="icons8-linkedin-4.svg" />
                    <img onClick={redirectPageGitHub} src="icon-github.svg" />
                </div>
            </div>
            <div className="home-content">
                {/* <form onSubmit={handleSave}>
                    <label>enter message</label>
                    <input type="text" ref={messageRef} />
                    <button type="submit">Save</button>
                </form> */}
                <h2 className="home-content-description-me">{language.home.descriptionTitle}</h2>
                <h3>{language.home.descriptionBodyOne}</h3>
                <h3>{language.home.descriptionBodyTwo}</h3>
                <h3>{language.home.descriptionBodyThree}</h3>
                <h3>{language.home.descriptionBodyFor}</h3>
                <div className="social-icons">
                    <img src="icon-react.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-typescript.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-javascript.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-html5.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-css3-2.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-bootstrap.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-material.svg" type="image/svg+xml">
                    </img>
                </div>
                <div className='social-icons'>
                    <img src="icon-c-2.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-dot-net-2.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-nodejs.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-nestjs.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-spring-boot.svg" type="image/svg+xml">
                    </img>
                </div>
                <div className='social-icons'>
                    <img src="icons8-oracle-pl-sql.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-postgres.svg" type="image/svg+xml">
                    </img>
                    <img src="microsoft-sql-server-1.svg" type="image/svg+xml" />
                    <img src="icon-mongodb.svg" type="image/svg+xml" />
                </div>
                <div className='social-icons'>
                    <img src="icon-postman.svg" type="image/svg+xml">
                    </img>
                    <img src="icon-jira.svg" type="image/svg+xml">
                    </img>
                </div>
            </div>
        </>
    )
}

export default HomeHeader;