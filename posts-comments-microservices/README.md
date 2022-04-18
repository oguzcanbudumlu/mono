#  Events
````typescript
interface Event {
    type: 'PostCreated',
    data : {
        id: string,
        title: string
    }
}
````

````typescript
interface Event {
    type: 'CommentModerated',
    data : {
        id: string,
        content: string,
        postId: string,
        status: 'approved' | 'rejected'    
    }
    
}
````

````typescript
interface Event{
    type: 'CommentUpdated', 
    data: {
        id: string, 
        content: string,
        postId: string,
        status: 'approved' | 'rejected'    
    }
}
````

````typescript
interface Event{
    type: 'CommentCreated', 
    data: {
        id: string, 
        content: string,
        postId: string,
        status: 'pending'    
    }
}
````

#Links
https://www.udemy.com/course/microservices-with-node-js-and-react/

https://draw.io/



