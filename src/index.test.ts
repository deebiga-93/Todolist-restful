describe('todos', function() {
    it('should list ALL todos on /todos<> GET');
    it('should list a todo on /todo/<id> GET');
    it('should list ALL todo on /todo/<id> GET');
    it('should add a todo on /todos<id> POST');
    it('should update a SINGLE todo on /todo/<id> PUT');
    it('should update a name of todo on /todo/<id> PUT');
    it('should update a description of todo on /todo/<id> PUT');
    it('should update a status of todo on /todo/<id> PUT');
    it('should delete a SINGLE todo on /todo/<id> DELETE');
    it('should delete all todo on /todos/<id> DELETE');
  });