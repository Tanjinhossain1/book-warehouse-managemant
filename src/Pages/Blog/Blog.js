import React from 'react';

const Blog = () => {

    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <h1 className='text-2xl'>1. Difference between javascript and nodejs?</h1>
                <p>JavaScript: <small>is a programming language. It is running in any web browser with a proper browser engine. Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.JavaScript running any engine like Spider monkey FireFox, JavaScript Core Safari, V8 Google Chrome.</small></p>
                <p>nodejs: <small> It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</small></p>
            </div>


        </div>
    );
};

export default Blog;