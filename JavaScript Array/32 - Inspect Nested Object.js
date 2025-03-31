/**
 * Inspect Nested Object
 */

const js = {
    name: 'JavaScript 2025 Revision',
    author: {
        name: 'Ch Bappy',
        email: 'bappy@gmail.com',
    },
    contents: {
        video: {
            count: 222,
        },
    },
};

const react = {
    name: 'React.js 2025 Revision',
    author: {
        name: 'Ch Bappy',
        email: 'bappy@gmail.com',
    },
    contents: {
        video: {
            count: 234,
        },
    },
};

const vue = {
    name: 'Vue.js 2025 Revision',
    author: {
        name: 'Ch Bappy',
        email: 'bappy@gmail.com',
    },
    contents: {
        video: {
            count: 125,
        },
        article: {
            count: 15,
        },
        quize: {
            count: 10
        },
    },
};

const inspactObj = (obj, path, returnValue = 0) => {
    // const path = 'contents.article.count';
    return path.split('.').reduce((acc, field) => {
        if (acc) {
            return acc[field];
        }
        return returnValue;
    }, obj);
};



const courses = [js, react, vue];
courses.forEach((course) => {
    // console.log(`${course.name} has - Artice: ${inspactArticle(course)}`);
    const countVideo = inspactObj(course, 'contents.video.count');
    const countArticle = inspactObj(course, 'contents.article.count');
    const countQuize = inspactObj(course, 'contents.quize.count');

    console.log(`Total Video = ${countVideo}, Article = ${countArticle}, Quize = ${countQuize}`);
    
})