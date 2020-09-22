# node-redis

#### H4 A quick PoC to spin up Redis, in-memory database and hook it up with simple Node.js application.

1. Dockerised the redis by using bitnami/redis image.
   docker pull bitnami/redis
   docker run -e ALLOW_EMPTY_PASSWORD=yes -p 6379:6379 bitnami/redis
   
2. redis-cli 
   to access redis cli

3. Some important references - 

   https://try.redis.io/
   
   http://oldblog.antirez.com/post/take-advantage-of-redis-adding-it-to-your-stack.html
   
   http://highscalability.com/blog/2011/7/6/11-common-web-use-cases-solved-in-redis.html
