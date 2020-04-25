




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
                                    [`content_design 1`, 40],
                                    [`content_design 4`, 75],
                                ],
        title_coding        :   `coding skills`,
        content_coding      :   [
                                    [`content_coding 1`, 50],
                                    [`content_coding 3`, 60],
                                    [`content_coding 4`, 80],
                                ]
    },
    th : {
        title_design        :   `ทักษะการออกแบบ`,
        content_design      :   [
                                    [`ทักษะการออกแบบ 1`, 40],
                                    [`ทักษะการออกแบบ 4`, 75],
                                ],
        title_coding        :   `ทักษะการเขียนโค้ด`,
        content_coding      :   [
                                    [`ทักษะการเขียนโค้ด 1`, 50],
                                    [`ทักษะการเขียนโค้ด 3`, 60],
                                    [`ทักษะการเขียนโค้ด 4`, 80],
                                ]
    }
}



// Resume card
const RESUME = {
    en : {
        title               : `resume`,
        working_title       :   `working history`,
        working_content     :   [
            [`working_title 1`, `2020`, `The single-player mode lets players control three characters`],
            [`working_title 2`, `2021`, `Each character has a set of eight skills that represent their`],
        ],        
        education_title     :   `education history`,
        education_content   :   [
            [`education_title 1`, `2020`, `The single-player mode lets players control three characters`],
            [`education_title 2`, `2021`, `Each character has a set of eight skills that represent their`],
            [`education_title 3`, `2022`, `While free-roaming the game world, players may engage `],
            [`education_title 3`, `2022`, `While free-roaming the game world, players may engage in`],
        ]
    },
    th : {
        title               : `ประวัติ`,
        working_title       :   `ประวัติการทำงาน`,
        working_content     :   [
            [`การทำงาน 1`, `2563`, `ทดสอบ`],
            [`การทำงาน 2`, `2564`, `ทดสอบ`],
        ],
        education_title     :   `ประวัติการศึกษา`,
        education_content   :   [
            [`การศึกษา 1`, `2563`, `ทดสอบ`],
            [`การศึกษา 2`, `2564`, `ทดสอบ`],
            [`การศึกษา 3`, `2565`, `ทดสอบ`],
            [`การศึกษา 3`, `2566`, `ทดสอบ`],
        ]
    }

}



// Portfolio card
const PORT = {
    en : {
        title   : `portfolio`,
        content : [
            [`port.jpg`, `title`, `short_detail`],
            [`port.jpg`, `title`, `short_detail`],
            [`port.jpg`, `title`, `short_detail`],
            [`port.jpg`, `title`, `short_detail`],
            [`port.jpg`, `title`, `short_detail`],
        ]
    },
    th : {
        title   : `ผลงาน`,
        content : [
            [`port.jpg`, `ชื่อผลงาน`, `คำอธิบาย`],
            [`port.jpg`, `ชื่อผลงาน`, `คำอธิบาย`],
            [`port.jpg`, `ชื่อผลงาน`, `คำอธิบาย`],
            [`port.jpg`, `ชื่อผลงาน`, `คำอธิบาย`],
            [`port.jpg`, `ชื่อผลงาน`, `คำอธิบาย`],
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