const { Fetch } = require("./dbFetch.js");

onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });


    // Post request to backend
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          }); 
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  