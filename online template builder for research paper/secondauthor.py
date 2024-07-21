<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Research Paper Sections</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <style>
    body {
      padding: 20px;
    }

    .section-button {
      margin-bottom: 10px;
      width: 200px; /* Set the desired width for the buttons */
    }

    .form-container {
      max-width: 600px;
      margin: auto;
    }

    .button-container {
      margin-top: 20px;
      text-align: center;
    }
  </style>
</head>

<body>

  <div class="container-fluid">
    <div class="row">

      <!-- My Sections -->
      <div class="col-md-3">
        <h1>My Sections</h1>
        <hr>

        <div class="btn-group-vertical">
          <a href="{{ url_for('title')}}"><button type="button" class="btn btn-outline-primary section-button">Title</button></a>
          <a href="{{ url_for('author')}}"><button type="button" class="btn btn-outline-primary section-button">Author</button></a>
          <a href="{{ url_for('abstract')}}"><button type="button" class="btn btn-outline-primary section-button">Abstract</button></a>
          <a href="{{ url_for('keyword')}}"><button type="button" class="btn btn-outline-primary section-button">Keywords</button></a>
          <a href="{{ url_for('introduction')}}"><button type="button" class="btn btn-outline-primary section-button">Introduction</button></a>
          <a href="{{ url_for('literature')}}"><button type="button" class="btn btn-outline-primary section-button">Literature Review</button></a>
          <a href="{{ url_for('design')}}"><button type="button" class="btn btn-outline-primary section-button">Design and Modeling</button></a>
          <a href="{{ url_for('result')}}"><button type="button" class="btn btn-outline-primary section-button">Results</button></a>
          <a href="{{ url_for('conclusion')}}"><button type="button" class="btn btn-outline-primary section-button">Conclusion</button></a>
          <a href="{{ url_for('references')}}"><button type="button" class="btn btn-outline-primary section-button">References</button></a>
        </div>
      </div>

      <!-- Author Information -->
      <div class="col-md-7">
        <div class="container">
          <h1 class="text-center">Author Information</h1>
          <hr>

          <div class="form-container">
            <form method="post" action="{{url_for('author')}}">
              <div class="form-group">
                <label for="authorName">Author Name:</label>
                <input type="text" class="form-control" id="authorName" placeholder="Enter author name" name="authorname">
              </div>
              <div class="form-group">
                <label for="department">Department:</label>
                <input type="text" class="form-control" id="department" placeholder="Enter department" name="department">
              </div>
              <div class="form-group">
                <label for="college">College:</label>
                <input type="text" class="form-control" id="college" placeholder="Enter college" name="college">
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city" placeholder="Enter city" name="city">
              </div>
              <div class="form-group">
                <label for="country">Country:</label>
                <input type="text" class="form-control" id="country" placeholder="Enter country" name="country">
              </div>
              <div class="form-group">
                <label for="email">Email ID:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
            </form>
          </div>
          
          <form method="post" action="{{url_for('author')}}">

              <div class="button-container">
                <button type="button" class="btn btn-success">Add</button>
              </div>
           </form>
           
        </div>
      </div>

    </div>
  </div>

  <!-- Bootstrap JS and Popper.js -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>
