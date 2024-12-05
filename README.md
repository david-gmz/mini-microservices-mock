# Mini Microservices App with NodeJS + ReactJS

The goal of this application is to really just get a **taste of microservices architecture**. It's not recommend using this project as a template for future microservices projects. 

We have posts and then we have comments. So in total we really have two different resources.

So we're going to think about creating two different services, **post service** that is in charge of storing all the different posts we have and retrieving them, giving them back to us.

And we'll have a **comment service** that is going to be in charge of handling content creation and listing all the different comments out.

So we start to think about these different services. The first thing we want to really do is picture the different goals or responsibility of each service.The ability to create a post and to list all posts and for comments the ability to create a comment and list all the comments.

## There's some hidden complexity inside of here.

The post service is going to be pretty straightforward, but if you drill down the comments, service is going to probably be a little bit more challenging than you might think at first glance, the comment service, whenever we create a comment, we're going to really be tying a comment to a post. There's going to kind of be a dependency of sort between creating a comment and having some knowledge of what posts exist. So we're going to have to apply one of those **asynchronous** or **synchronous** communication patterns to make sure that users can only create comments that are tied to a very specific post. In addition, whenever we try to list out some comments, we probably want to limit the comments.