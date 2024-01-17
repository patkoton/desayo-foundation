
const Image1 = (() => ({  
    a_img1: require('./assets/images/small_star.png'),
    a_img2: require('./assets/images/contact1.png'),
    a_img3: require('./assets/images/contact2.png'),
    a_img4: require('./assets/images/mail.png'),
    a_img5: require('./assets/images/call.png'),
    a_img6: require('./assets/images/address.png'),
    }
))();

export const empowerment = [
    {
        image: Image1.a_img1,
        section: 'Supportive Care',
        description: 'We offer a range of services and programs designed to meet the unique needs of individuals.',
    },
    
    {
        image: Image1.a_img1,
        section: 'Supportive Care',
        description: 'We offer a range of services and programs designed to meet the unique needs of individuals.',
    }
]


export const testimonial = [
    {
        image1: Image1.a_img1,
        image2: Image1.a_img2,
        story: 'The organization has truly changed my mind,I am forever grateful.',
        name: 'Jane Daramola Doe',
        role: 'Widow',
        place: 'Orita, Ondo State',
    },
    
    {
        image1: Image1.a_img1,
        image2: Image1.a_img3,
        story: 'The organization has truly changed my mind,I am forever grateful.',
        name: 'Jane Daramola Doe',
        role: 'Volunteer',
        place: 'Orita, Ondo State',
    }
]


export const contactDetails = [
    {
        image: Image1.a_img4,
        section: 'Email',
        description: 'Feel free to reach out to us for more details or support',
        order: 'hello@faithbasedngo'
    },
    
    {
        image: Image1.a_img5,
        section: 'Phone',
        description: 'You can also give us a call, if you have questions',
        order: '+2347863769438'
    },

    {
        image: Image1.a_img6,
        section: 'Office',
        description: 'Visit our office during business hours.',
        order: 'Plot 34, Falana drive, Ondo State'
    }
]