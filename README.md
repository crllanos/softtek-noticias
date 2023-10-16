# Softtek exercise

## Frontend
The frontend presents a list of articles from an external provider, it is capable of search and paginate results, format the article's date.

Also, the front has the option to save an article as favorite, using for that the following Backend.


## Backend

### The exercise
The exercise consist in implementing a Springboot backend in Java 11 for the news platform.

### The solution
The solution is presented as follows:
- A RESTFUL API supporting the CRUD operations (crete, read, update, delete).
- H2 in memory database.
- Tests on the service and controller layers.
- Handler exceptions presenting the correspondent HTTP status.

### Endpoints

#### Get the article list

    curl -L 'http://localhost:8080/api/v1/articles'

#### Create a new article

    curl -L 'http://localhost:8080/api/v1/articles' \
    -H 'Content-Type: application/json' \
    -d '{
    "title" : "Article title",
    "summary" : "The summary",
    "publishedAt" : "2023-10-10",
    "url" : "http://www.google.com/"
    }'

#### Get an specific article (whit ARTICLE_UUID)

    curl -L 'http://localhost:8080/api/v1/articles/<ARTICLE_UUID>'

#### Update an article

    curl -L -X PUT 'http://localhost:8080/api/v1/articles/<ARTICLE_UUID>' \
    -H 'Content-Type: application/json' \
    -d '{
    "title" : "New title",
    "summary" : "another summary",
    "url": "http://www.google.com/",
    "publishedAt": "2023-10-10"
    }'

#### Delete

    curl -L -X DELETE 'http://localhost:8080/api/v1/articles/<ARTICLE_UUID>'
