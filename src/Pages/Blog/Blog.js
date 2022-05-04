import React from 'react';

const Blog = () => {

    return (
        <div className='w-3/4 mx-auto my-6'>
            <div>
              
                <h1 className='text-2xl'>1. Difference between javascript and nodejs?</h1>
                <p>JavaScript: <small>is a programming language. It is running in any web browser with a proper browser engine. Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.JavaScript running any engine like Spider monkey FireFox, JavaScript Core Safari, V8 Google Chrome.</small></p>
                <p>nodejs: <small> It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</small></p>
            </div>
            <div className='mt-4'>
                <h1>2. When should you use nodejs and when should you use mongodb?</h1>
                <p>Nodejs: <small>If i have a web application project in my mind, then most probably, evaluating the pros and cons of building in stack around JavaScript and the tools using it. Sooner or later, i will think of the backend development platform, and then surely come across Node.js.</small></p>
                <p>Mongodb: <small>MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don't need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</small></p>
            </div>
            <div className='mt-4'>
                <h1>3. Differences between sql and nosql databases?</h1>
                <p>SQL: <small> RELATIONAL DATABASE MANAGEMENT SYSTE.These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries	Vertically Scalable.</small></p>
                <p>noSQL: <small>Non-relational or distributed database system.They have dynamic schema   These databases are best suited for hierarchical data storage.These databases are not so good for complex queries Horizontally scalable

                </small></p>
            </div>
            <div className='mt-4'>
                <h1>4. What is the purpose of jwt and how does it work?</h1>
                <p>JWT: <small>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots, and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</small></p>
            </div>

        </div>
    );
};

export default Blog;