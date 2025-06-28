import TitleCover from "@/ui/TitleCover"
import classes from "./ProfilePage.module.css"
import Button from "@/ui/Button"
const ProfilePage=()=>{
    return <div className={classes.profile_grid}>
        <div className={classes.user_content}>
            <TitleCover text="Profile" />
            <p>name</p>
            <p>email</p>
            <p>contact no</p>
        </div>
        <p className={classes.acc_created}>Date Joined</p>
        <img src="" alt="profile" className={classes.profile_img} />
        <Button text="Logout" classType="logout_btn" />
        <div className={classes.user_ecopoints}>
            <h2>EcoPoints</h2>
            <p>0</p>
        </div>
        <Button text="My Posts" classType="posts_btn" />
        <div className={classes.gl+" "+classes.ps1}></div>
        <div className={classes.gl+" "+classes.ps2}></div>
        <div className={classes.pl+" "+classes.ps3}></div>
        <div className={classes.pl+" "+classes.ps4}></div>
    </div>
}

export default ProfilePage