




// MENU
var MENU_LIST = {
    en : [
        'home',
        'resume',
        'portfolio',
        'contact'
    ],
    th : [
        'หน้าแรก',
        'ประวัติ',
        'ผลงาน',
        'ติดต่อ'
    ]
}



// Info
const INFO = {
    icon : [
        [`fab fa-facebook-f fa-lg`, `https://www.facebook.com/Mr.Fermz`],
        [`fab fa-twitter fa-lg`, `https://twitter.com/MrFermz`],
        [`fab fa-github fa-lg`, `https://github.com/MrFermz`],
    ],
    content :   {
        en : [
            [`name`, `Krittanupong Suksai`],
            [`birthday`, `04 August 1995`],
            [`nickname`, `Ferm`],
        ],
        th : [
            [`ชื่อ`, `กฤตนุพงค์ สุกใส`],
            [`วันเกิด`, `4 สิงหาคม 2538`],
            [`ชื่อเล่น`, `เฟิร์ม`],
        ]
    }
                    
}




// Home card
const ABOUT = {
    en : {
        title   :   `about me`,
        content :   `I am Krittanupong Suksai or "Ferm".
                    I'm ${ageCalculator(1995)} years old. 
                    I have a passion for the computer since I have 9 years old 
                    until I study at the university I choose to study in the major of computer science. 
                    And now, I know something that I like and I can make it good is all about the computer.`
    },
    th : {
        title   :   `แนะนำตัว`,
        content :   `ผมชื่อนายกฤตนุพงค์ สุกใส เรียกสั้น ๆ ว่า "เฟิร์ม" 
                    อายุ ${ageCalculator(1995)} ปี 
                    มีความชอบและหลงใหลในคอมพิวเตอร์เป็นอย่างมากตั้งแต่ 9 
                    ขวบจนได้เริ่มเรียนในมหาวิทยาลัยในสาขาวิทยาศาสตร์คอมพิวเตอร์ 
                    จึงได้เจอสิ่งที่ตนเองชอบตั้งแต่นั้นเป็นต้นมา`
    }
}

const HOBBY = {
    en : {
        title   :   `hobbies`,
        content :   [
                        [`fas fa-gamepad fa-3x`, `Play game`, `The first time that I played games was 9 years old until now I still play game. But I can manage the time to play and work.`],
                        [`fas fa-music fa-3x`, `Listen to music`, `Listening to music is already a part of life. I like hip-hop music. And the 90s music.`],
                        [`fas fa-code fa-3x`, `Coding`, `Coding makes me know how to think systematically. They're is very useful in my life.`],
                    ]
    },
    th : {
        title   :   `งานอดิเรก`,
        content :   [
                        [`fas fa-gamepad fa-3x`, `เล่นเกม`, `ครั้งแรกที่เล่นเกมตั้งแต่อายุ 9 ขวบจนตอนนี้ยังเล่นอยู่ และแบ่งเวลาได้เป็นอย่างดี`],
                        [`fas fa-music fa-3x`, `ฟังเพลง`, `ฟังเพลงเป็นส่วนหนึ่งของชีวิตไปแล้ว ชอบแนวเพลงฮิปฮอป และแนวเพลงยุค 90`],
                        [`fas fa-code fa-3x`, `เขียนโค้ด`, `การเขียนโค้ดทำให้ผมเรียนรู้วิธีการคิดแบบเป็นลำดับขั้น ถือว่ามีประโชยน์มากในการใช้ชีวิต`],
                    ]
    }

}

const SKILLS = {
    en : {
        title_design        :   `design skills`,
        content_design      :   [
                                    [`Inkscape`, 50],
                                    [`HTML`, 40],
                                    [`CSS`, 35],
                                ],
        title_coding        :   `coding skills`,
        content_coding      :   [
                                    [`JavaScript`, 65],
                                    [`Python`, 40],
                                    [`Java`, 30],
                                    [`C++`, 25],
                                ]
    },
    th : {
        title_design        :   `ทักษะการออกแบบ`,
        content_design      :   [
                                    [`Inkscape`, 50],
                                    [`HTML`, 40],
                                    [`CSS`, 35],
                                ],
        title_coding        :   `ทักษะการเขียนโค้ด`,
        content_coding      :   [
                                    [`JavaScript`, 65],
                                    [`Python`, 40],
                                    [`Java`, 30],
                                    [`C++`, 25],
                                ]
    }
}

const TOOLS = {
    en : {
        title_tools     :   `tools`,
        content_tools   :   [
                                // Front-end
                                [`tools_html5.png`, `HTML5`],
                                [`tools_css3.png`, `CSS3`],
                                [`tools_javascript.png`, `JavaScript`],

                                // Front-end frame work
                                [`tools_react.png`, `React`],



                                // Back-end
                                [`tools_docker.png`, `Docker`],
                                [`tools_nginx.png`, `NGINX`],
                                [`tools_nodejs.png`, `Node.js`],

                                // Database
                                [`tools_mongo.png`, `MongoDB`],
                                [`tools_maria.png`, `MariaDB`],


                                // Other
                                [`tools_git.png`, `Git`],
                            ]
    },
    th : {
        title_tools     :   `เครื่องมือ`,
        content_tools   :   [
                                // Front-end
                                [`tools_html5.png`, `HTML5`],
                                [`tools_css3.png`, `CSS3`],
                                [`tools_javascript.png`, `JavaScript`],

                                // Front-end frame work
                                [`tools_react.png`, `React`],



                                // Back-end
                                [`tools_docker.png`, `Docker`],
                                [`tools_nginx.png`, `NGINX`],
                                [`tools_nodejs.png`, `Node.js`],

                                // Database
                                [`tools_mongo.png`, `MongoDB`],
                                [`tools_maria.png`, `MariaDB`],


                                // Other
                                [`tools_git.png`, `Git`],
                            ]
    }
}



// Resume card
const RESUME = {
    en : {
        title               : `resume`,
        working_title       :   `working`,
        working_content     :   [
            [`Internship`, `2019`, `YGGDrazil Group Co.,LTD<br>Have an internship in a software engineering job within the company.`],
            [`-`, ``, ``],
        ],
        education_title     :   `education`,
        education_content   :   [
            [`University`, `2019`, `Computer Science Rajamangala University of Technology Srivijaya Nakhon Si Thammarat Saiyai`],
            [`High school`, `2014`, `ศูนย์การศึกษานอกระบบและการศึกษาตามอัธยาศัยอำเภอลำทับ`],
            [`Middle school`, `2011`, `Kanjanapisek Wittayalai Krabi School`]
        ]
    },
    th : {
        title               : `ประวัติ`,
        working_title       :   `การทำงาน`,
        working_content     :   [
            [`ฝึกงาน`, `2562`, `YGGDrazil Group Co.,LTD<br>ได้ฝึกงานในหน้าที่ซอฟต์แวร์เอ็นจิเนียภายในบริษัท`],
            [`-`, ``, ``],
        ],
        education_title     :   `การศึกษา`,
        education_content   :   [
            [`มหาวิทยาลัย`, `2562`, `วิทยาศาสตร์คอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตนครศรีธรรมราช ไสใหญ่`],
            [`มัธยมปลาย`, `2557`, `ศูนย์การศึกษานอกระบบและการศึกษาตามอัธยาศัยอำเภอลำทับ`],
            [`มัธยมต้น`, `2554`, `โรงเรียนกาญจนาภิเษกวิทยาลัย กระบี่`],
        ]
    }
}

const EXP = {
    en : {
        title   : `experience`,
        content : [
            [`ACM ICPC 2017`],
            [`STARTUP THAILAND SONGKHLA 2017`],
        ]
    },
    th : {
        title   : `ประสบการณ์`,
        content : [
            [`ACM ICPC 2017`],
            [`STARTUP THAILAND SONGKHLA 2017`],
        ]
    }
}



// Portfolio card
const PORT = {
    en : {
        title   : `portfolio`,
        content : [
            [
                [
                    `leaveapp0`, 
                    `leaveapp1`, 
                    `leaveapp2`, 
                    `leaveapp3`,
                    `leaveapp4`,
                    `leaveapp5`,
                    `leaveapp6`,
                    `leaveapp7`,
                    `leaveapp8`,
                    `leaveapp9`,
                    `leaveapp10`,
                    `leaveapp11`,
                    `leaveapp12`,
                ], 
                `Leave Web App`, 
                `Front-end develop on HTML, JavaScript, CSS. Back-end has on centOS, Docker, NGINX. Node.js as API and MySQL as main database.`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/leaveApp`
            ],
            [
                [
                    `riceapp0`, 
                    `riceapp1`, 
                    `riceapp2`,
                    `riceapp3`,
                    `riceapp4`,
                    `riceapp5`,
                ],
                `Rice Web App`, 
                `Front-end development on React. Back-end use Node.js as API and MySQL as main Database.`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/rice-app`
            ],
            [
                [
                    `actlog0`, 
                    `actlog1`,
                    `actlog2`,
                    `actlog3`,
                    `actlog4`,
                    `actlog5`,
                    `actlog6`,
                    `actlog7`,
                    `actlog8`,
                    `actlog9`,
                ],
                `Activity log App`, 
                `Front-end has development on React Native. Admin development on React and back-end on firebase real-time database.`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/ACTLOG`
            ],
            [[`actlog0`], ``, ``, ``, ``],
        ]
    },
    th : {
        title   : `ผลงาน`,
        content : [
            [
                [
                    `leaveapp0`, 
                    `leaveapp1`, 
                    `leaveapp2`, 
                    `leaveapp3`,
                    `leaveapp4`,
                    `leaveapp5`,
                    `leaveapp6`,
                    `leaveapp7`,
                    `leaveapp8`,
                    `leaveapp9`,
                    `leaveapp10`,
                    `leaveapp11`,
                    `leaveapp12`,
                ], 
                `Leave Web App`, 
                `Front-end ใช้ HTML, JavaScript, CSS ฝั่ง Back-end อยู่บน centOS, Docker, NGINX มีการใช้ Node.js เป็นตัว API และ MySQL เป็นฐานข้อมูลหลัก`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/leaveApp`
            ],
            [
                [
                    `riceapp0`, 
                    `riceapp1`, 
                    `riceapp2`,
                    `riceapp3`,
                    `riceapp4`,
                    `riceapp5`,
                ],
                `Rice Web App`, 
                `Front-end ใช้ React ฝั่ง Back-end ใช้ Node.js เป็นตัว API และมี MySQL เป็นฐานข้อมูลหลัก`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/rice-app`
            ],
            [
                [
                    `actlog0`, 
                    `actlog1`,
                    `actlog2`,
                    `actlog3`,
                    `actlog4`,
                    `actlog5`,
                    `actlog6`,
                    `actlog7`,
                    `actlog8`,
                    `actlog9`,
                ],
                `Activity log App`, 
                `พัฒนาบน React Native และฝั่งแอดมินพัฒนาบน React ใช้ firebase เป็นฐานข้อมูลหลัก`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/ACTLOG`
            ],
            [[`actlog0`], ``, ``, ``, ``],
        ]
    }
}



// Contact card
const CONTACT = {
    en : {
        title   : `contact`,
        content : [
            [`email`, `Mr.Fermz@hotmail.com`],
        ]
    },
    th : {
        title   : `ติดต่อ`,
        content : [
            [`อีเมล`, `Mr.Fermz@hotmail.com`],
        ]
    }

}