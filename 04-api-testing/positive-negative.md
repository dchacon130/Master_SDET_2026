1. Cuando enviamos usuario y contraseña correctos: 

passed
Status code is 200
passed
Response has token
failed
Response has reason | AssertionError: expected { token: '....' } to have property 'reason'
passed
Response time is less than 2000ms

pm.test("Response has token", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("token");
    pm.expect(jsonData.token).to.be.a("string").and.not.empty;
});

2. Cuando enviamos usuario correcto y contraseña incorrectos: 
passed
Status code is 200
failed
Response has token | AssertionError: expected { reason: 'Bad credentials' } to have property 'token'
passed
Response has reason
passed
Response time is less than 2000ms

pm.test("Response has reason", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("reason");
    pm.expect(jsonData.reason).to.be.a("string").and.equal("Bad credentials");
});