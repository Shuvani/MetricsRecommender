# Metrics Recommender
This is the system to recommend metrics based on the GQM model

### To run this code:

1. Set up the virtual environment (instructions for Linux)
    ```bash
    #/path
    python3 -m venv venv
    source venv/bin/activate
    ```
2. Clone this repository at */path/venv*
3. Start the backend part
    ```bash
    # /path/venv/MetricsRecommender
    pip install -r requirements.txt
    python3 manage.py runserver
    ```
4. Start the frontend part
   ```bash
    # /path/venv/MetricsRecommender/gqm_interface
    npm install
    npm start
   ```
5. Turn off the virtual environment
    ```bash
    # /path
    deactivate
   ``` 
   
### How to use

* You can login with one of this credentials if you want to see the existed data:

    |username|password|
    |-----|--------|
    |Marina|password|
    |Kirill|abc123| 
    |Anna|sunshine|
    |Artem|qwerty|
    |Max|12345|
* Or you can register and create your own goals, questions and metrics.