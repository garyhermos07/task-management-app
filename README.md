# task-management-app
A React task management web application built for the QuickStart Software Engineering Bootcamp, featuring dynamic to-do list and a controlled contact form

## User Stories 
1. As a user, I want to add a new task so that i can keep track of thing i need to do.
2. As a user, i want to mark task as completed so that i know which task ar finished.
3. As a user, i want to delete task so that i can remove task i no longer need.
4. As a user, i want to conact the website owner through a conact form.

## State Tree 
App
|
|-- todos
|  |- id 
|  |- text
|  |- completed
| 
|-- contactForm
    |- first name 
    |- last name 
    |- email
    |- comments 

## Components 

container Components
- App
- TodoPage 
- ContactPage 

Presentational Components 
- Navabar
- TodoForm 
- TodoList 
- TodoItem
- ContactForm 
