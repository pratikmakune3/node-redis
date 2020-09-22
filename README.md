# node-redis

#### A quick PoC to spin up Redis, in-memory database and hook it up with simple Node.js application.

1. Dockerised Redis by using bitnami/redis image - https://hub.docker.com/r/bitnami/redis

   docker pull bitnami/redis
   
   docker run -e ALLOW_EMPTY_PASSWORD=yes —name rdb -p 6379:6379 bitnami/redis
   
   SSH to container -->
   
   docker exec -it rdb redis-cli
   
2. redis-cli 
   to access redis cli

3. Some important references - 

   https://try.redis.io/
   
   http://oldblog.antirez.com/post/take-advantage-of-redis-adding-it-to-your-stack.html
   
   http://highscalability.com/blog/2011/7/6/11-common-web-use-cases-solved-in-redis.html
