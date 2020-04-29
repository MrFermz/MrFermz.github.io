




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
        title   : `about me`,
        content : `introduce`
    },
    th : {
        title   : `แนะนำตัว`,
        content : `ทดสอบ`
    }
}

const HOBBY = {
    en : {
        title   :   `hobbies`,
        content :   [
                        [`fas fa-gamepad fa-3x`, `Play game`, `test hobbies1`],
                        [`fas fa-music fa-3x`, `Listen to music`, `test hobbies2`],
                        [`fas fa-code fa-3x`, `Coding`, `test hobbies3`],
                    ]
    },
    th : {
        title   :   `งานอดิเรก`,
        content :   [
                        [`fas fa-gamepad fa-3x`, `เล่นเกม`, `ชอบเล่นเกมมาก ตั้งแต่ 9 ขวบจนตอนนี้ยังเล่นอยู่ และแบ่งเวลาได้เป็นอย่างดี`],
                        [`fas fa-music fa-3x`, `ฟังเพลง`, `ฟังเพลงเป็นส่วนหนึ่งของชีวิตไปแล้ว แนวเพลงฮิปฮอป และแนวเพลงยุค 90`],
                        [`fas fa-code fa-3x`, `เขียนโค้ด`, `การเขียนโค้ดทำให้ผมเรียนรู้วิธีการคิดแบบเป็นลำดับขั้น ถือว่ามีประโชยน์มากในการใช้ชีวิต`],
                    ]
    }

}

const SKILLS = {
    en : {
        title_design        :   `design skills`,
        content_design      :   [
                                    [`HTML`, 50],
                                    [`CSS`, 65],
                                    [`Inkscape`, 50],
                                ],
        title_coding        :   `coding skills`,
        content_coding      :   [
                                    [`JavaScript`, 80],
                                    [`Python`, 50],
                                    [`Java`, 35],
                                    [`C++`, 35],
                                ]
    },
    th : {
        title_design        :   `ทักษะการออกแบบ`,
        content_design      :   [
                                    [`Inkscape`, 65],
                                    [`HTML`, 50],
                                    [`CSS`, 35],
                                ],
        title_coding        :   `ทักษะการเขียนโค้ด`,
        content_coding      :   [
                                    [`JavaScript`, 80],
                                    [`Python`, 50],
                                    [`Java`, 40],
                                    [`C++`, 35],
                                ]
    }
}

const TOOLS = {
    en : {
        title_tools     :   `tools`,
        content_tools   :   [
                                [`tools_react.png`, `React, React Native`],
                                [`tools_docker.png`, `Docker`],
                                [`tools_nginx.png`, `NGINX`],
                                [`tools_nodejs.png`, `Node.js`],
                            ]
    },
    th : {
        title_tools     :   `เครื่องมือ`,
        content_tools   :   [
                                [`tools_react.png`, `React, React Native`],
                                [`tools_docker.png`, `Docker`],
                                [`tools_nginx.png`, `NGINX`],
                                [`tools_nodejs.png`, `Node.js`],
                            ]
    }
}



// Resume card
const RESUME = {
    en : {
        title               : `resume`,
        working_title       :   `working`,
        working_content     :   [
            [`Internship`, `2019`, `YGGDrazil Group Co.,LTD<br>I'm trained in-house Software engineer.`],
            [`-`, ``, ``],
        ],
        education_title     :   `education`,
        education_content   :   [
            [`University`, `2019`, `Rajamangala University of Technology Srivijaya Nakhon Si Thammarat Saiyai`],
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
            [`มหาวิทยาลัย`, `2562`, `มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตนครศรีธรรมราช ไสใหญ่`],
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
                [`leaveapp0`, `leaveapp1`, `leaveapp2`, `leaveapp3`], 
                `Leave Web App`, 
                `Front-end and Back-end`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/leaveApp`
            ],
            [
                [`riceapp0`, `riceapp1`, `riceapp2`],
                `Rice Web App`, 
                `Front-end and Back-end`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/rice-app`
            ],
            [
                [`actlog0`, `actlog1`],
                `Activity log App`, 
                `Front-end and Back-end`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/ACTLOG`
            ],
            [``, ``, ``, ``, ``],
        ]
    },
    th : {
        title   : `ผลงาน`,
        content : [
            [
                [`leaveapp0`, `leaveapp1`, `leaveapp2`, `leaveapp3`], 
                `Leave Web App`, 
                `Front-end and Back-end`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/leaveApp`
            ],
            [
                [`riceapp0`, `riceapp1`, `riceapp2`],
                `Rice Web App`, 
                `Front-end and Back-end`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/rice-app`
            ],
            [
                [`actlog0`, `actlog1`],
                `Activity log App`, 
                `Front-end and Back-end`, 
                `fas fa-link fa-sm`, 
                `https://github.com/MrFermz/ACTLOG`
            ],
            [``, ``, ``, ``, ``],
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