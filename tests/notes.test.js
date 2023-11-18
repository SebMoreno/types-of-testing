describe('Notes API', () => {
  describe('DELETE /notes/:id', () => {
    it('should delete a specific note', () => {
    });
    it('should return 404 if note does not exist', () => {
    });
    it('should return 400 if id is not a number', () => {
    });
    it('should return 400 if id is negative', () => {
    });
  });
  describe('GET /notes', () => {
    it('should return all notes', () => {
    });
    it('should return 404 if no notes exist', () => {
    });
  });

  describe('GET /notes/:id', () => {
    it('should return a specific note', () => {
    });
    it('should return 404 if note does not exist', () => {
    });
    it('should return 400 if id is not a number', () => {
    });
    it('should return 400 if id is negative', () => {
    });
    it('should return 400 if id is not an integer', () => {
    });
  });

  describe('POST /notes', () => {
    it('should create a new note', () => {
    });
    it('should return 400 if request body is invalid', () => {
    });
  });

  describe('PUT /notes/:id', () => {
    it('should update a specific note', () => {
    });
    it('should return 404 if note does not exist', () => {
    });
    it('should return 400 if request body is invalid', () => {
    });
  });
});
