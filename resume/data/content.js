




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
        content : `Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three criminals and their efforts to commit heists while under pressure from a government agency and powerful crime figures. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.`
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
                        [`fas fa-gamepad fa-3x`, `Play game`, `countryside and the fictional city of Los Santos, based on Los Angeles.`],
                        [`fas fa-music fa-3x`, `Listen to music`, `countryside and the fictional city of Los Santos, based on Los Angeles.`],
                        [`fas fa-code fa-3x`, `Coding`, `countryside and the fictional city of Los Santos, based on Los Angeles.`],
                    ]
    },
    th : {
        title   :   `งานอดิเรก`,
        content :   [
                        [`fas fa-gamepad fa-3x`, `เล่นเกม`, `ทดสอบงานอดิเรก1`],
                        [`fas fa-music fa-3x`, `ฟังเพลง`, `ทดสอบงานอดิเรก2`],
                        [`fas fa-code fa-3x`, `เขียนโค้ด`, `ทดสอบงานอดิเรก3`],
                    ]
    }

}

const SKILLS = {
    en : {
        title_design        :   `design skills`,
        content_design      :   [
                                    [`HTML`, 50],
                                    [`CSS`, 65],
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
                                    [`HTML`, 50],
                                    [`CSS`, 65],
                                ],
        title_coding        :   `ทักษะการเขียนโค้ด`,
        content_coding      :   [
                                    [`JavaScript`, 80],
                                    [`Python`, 50],
                                    [`Java`, 35],
                                    [`C++`, 35],
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
            [`University`, `2020`, `Rajamangala University of Technology Srivijaya Nakhon Si Thammarat Saiyai`],
            [`High school`, `??`, `ศูนย์การศึกษานอกระบบและการศึกษาตามอัธยาศัยอำเภอลำทับ`],
            [`Middle school`, `??`, `Kanjanapisek Wittayalai Krabi School`]
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
            [`มัธยมปลาย`, `??`, `ศูนย์การศึกษานอกระบบและการศึกษาตามอัธยาศัยอำเภอลำทับ`],
            [`มัธยมต้น`, `??`, `โรงเรียนกาญจนาภิเษกวิทยาลัย กระบี่`],
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