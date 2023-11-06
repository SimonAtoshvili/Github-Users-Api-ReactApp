import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink, faBuilding } from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';



function ThirdLight(props) {
    return (
        <div className={`third ${props.mode ? "" : 'third_dark'}`}>
            <img src={props.info.avatar_url} />
            <div className="content">
                <h1 className={`${props.mode ? "" : 'h1_dark'}`}>{props.info.name}</h1>
                <p className="nickname">{`@${props.info.login}`}</p>
                <p className={`bio ${props.mode ? "" : 'bio_dark'}`}>{props.info.bio ? props.info.bio : "This profile has no bio"}</p>
                <p className={`join_date ${props.mode ? "" : 'join_date_dark'}`}>{`Joined ${new Date(props.info.created_at).toLocaleDateString("default", {day: '2-digit', month: 'short', year: 'numeric'})}`}</p>
                <div className={`details_1 ${props.mode ? "" : 'details_1_dark'}`}>
                    <div className="repos_div">
                        <p className="repos_text">Repos</p>
                        <p className="repos_num">{props.info.public_repos}</p>
                    </div>
                    <div className="followers_div">
                        <p className="followers_text">Followers</p>
                        <p className="followers_num">{props.info.followers}</p>
                    </div>
                    <div className="following_div">
                        <p className="following_text">Following</p>
                        <p className="following_num">{props.info.following}</p>
                    </div>
                </div>
                <div className={`details_2 ${props.mode ? "" : 'details_2_dark'}`}>
                    <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className='location_name'>{props.info.location ? props.info.location : "Unknown"}</p>
                    </div>
                    <div className='twitter'>
                        <FontAwesomeIcon icon={faTwitter} />
                        <p className='twitter_name'>{props.info.twitter_username ? props.info.twitter_username : "Not Available"}</p>
                    </div>
                    <div className='blog'>
                        <FontAwesomeIcon icon={faLink} />
                        <p className='blog_name'>{props.info.blog ? props.info.blog : "Not Available"}</p>
                    </div>
                    <div className='work'>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p className='blog_name'>{props.info.company ? props.info.company : "Not Available"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdLight;