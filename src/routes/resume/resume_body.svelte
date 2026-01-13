<script lang="ts">
    // JOBS
    interface job {
        title:string,
        position:string,
        date:string,
        point_1:string,
        point_2:string,
        point_3:string,
    };
    interface project {
        title:string,
        img:string,
        description:string,
    };
    let jobs: job[] = [
        {
            title:"Voinovich School of Leadership and Public Service",
            position:"IT Technician",
            date:"2024 - Current",
            point_1:"Provides technological support and assistance to over 100 employees on and off site.",
            point_3:"Carries out repair for lenovo and dell systems.",
            point_2:"Creates K-12 educational programming and lesson plans with a focus on technological literacy.",
        },
        {
            title:"All Campus Radio Network",
            position:"Director of Engineering",
            date:"2023 - Current",
            point_1:"Lead full stack developer for acrn.com.",
            point_2:"Repairs radio and live sound equipment.",
            point_3:"Manages a team of 15 students."        
        },
        {
            title:"University Content Management",
            position:"UX Designer",
            date:"2022 - 2023",
            point_1:"Designed, copyedited and published university webpages for Ohio University.",
            point_2:"Adhered to branding guidelines and best practices in communications and marketing.",
            point_3:"Maintained upkeep of university course spreadsheets"
        },
        {
            title:"CBS Sports",
            position:"Runner | Timeout Coordinator",
            date:"2022 - 2023",
            point_1:"Assisted with live television production.",
            point_2:"Stood in for timeing coordination of on-air commercial breaks.",
            point_3:"Assisted production manager in retrieving talent and beverages for the team."
        },
    ];
    let projects: project[] = [
        {
            title:"Ceramic Synth",
            img:"",
            description:"A multi-disciplaniary art piece combining ceramics and hardware audio synthesis. Powered with the ATMEGA328 P Chip, utilizing the Mozzi sound engine."
        },
        {
            title:"Geni",
            img:"",
            description:"Electronic Sequencer and Oscillator. Won Blossom Hack 2024 Best Hardware Award."
        },
        {
            title:"elidigitalworld",
            img:"",
            description:"A full-stack self hosted online portfolio made with svelte."
        },
        {
            title:"AftrMIDIBall",
            img:"",
            description:"Recreation of the video game Super Monkey Ball, playable with any midi controller. Written entirely in C++",
        },
        {
            title:"User-177606668",
            img:"",
            description:"An anonymous music platform for hundreds of artists around the world to share their creations. Created mid 2020, still active today.",
        },
    ];
</script>

<div class="resume_body">
    <!-- experience -->
    <div class="resume_body_left">
        <h2>--</h2>
        {#each jobs as job}
            <div class="job">
                <div class="job_information">
                    <h3>{job.title}</h3>
                </div>
                <div class="job_title">
                    <p>{job.position}</p>
                    <p>|</p>
                    <p>{job.date}</p>
                </div>
                <div class="points">
                    <p>{job.point_1}</p>
                    <p>{job.point_2}</p>
                    <p>{job.point_3}</p>
                </div>
            </div>
        {/each}
    </div>
    <!-- skills + education + profile -->
    <div class="resume_body_right">
                    <h2>--</h2>
        <div class="education">
            <h3>Education</h3>
            <p id="degree">B.S. Computer Science</p>
            <p>Ohio University</p>
            <p>2021 - 2026</p>
        </div>
        <div class="skills">
            <h3>Skills</h3>
            <!-- skillbubble -->
                <p>
                C, C++, Lua, Svelte, Python, Blender,
                Ableton, Microsoft 365, Adobe, Web Development,
                Electronics Repair, Event Management
                </p>
        </div>
        <div class="profile">
            <!-- my profile -->
            <h3>Projects</h3>
            {#each projects as project}
                <p id="project_title">{project.title}</p>
                <p id="project_description">{project.description}</p>
            {/each}
        </div>
    </div>
</div>

<style>
@font-face {
    font-family: "monoregular";
    src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "monobold";
    src: url("/fonts/SpaceMono-Bold.ttf") format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "block";
    src: url("/fonts/block.ttf") format("truetype");
    font-display: swap;
}
p {
    color:rgb(60, 60, 60);
}
a:visited {
    color:black;
}
a:hover {
    color:blue;
}
li {
    list-style:none;
}
/* resume body */
.resume_body {
    display:flex;
    justify-content: space-between;
    margin-left:20px;
    margin-right:20px;
    padding-bottom:100px;
}
h2 {
    padding-top:0;
}
/* resume right */
.resume_body_right {
    width:45vw;
}
.education {
    padding-left:10px;
    background:rgba(128, 128, 128, 0.039);
    border-radius: 20px;
}
.education h3 {
    padding-bottom:0;
    margin:0;
}
.education p {
    font-style:italic;
    text-align: right;
    margin:0;
}
#degree {
    font-style:normal;
}
.skills {
    padding-left:10px;
    background:rgba(128, 128, 128, 0.039);
    border-radius: 20px;
}
.profile {
    padding-left:10px;
    background:rgba(128, 128, 128, 0.039);
    border-radius: 20px;
    padding-bottom:1px;
}
#project_title {
    color:rgb(25, 25, 25);
}
#project_description {
    padding-left:15px;
}
/* resume left */
.resume_body_left {
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    width:45vw;
}
.job {
    display:flex;
    flex-direction: column;
    margin-bottom:15px;
    background:rgba(128, 128, 128, 0.039);
    border-radius: 20px;
}
.job_information {
    margin-bottom:2px;
}
.job_information h3 {
    margin:0;
}
.job_title {
    display:flex;
    justify-content: baseline;
    padding:0;
}
.job_title p {
    padding-right:4px;
    margin:0;
}
.points {
    margin-left:20px;
}
.points p{
    font-size:10.5pt;
    padding:0;
    margin-bottom:10px;
}
</style>