const express = require('express');
const router = express.Router();
const NoteController = require('./controll/NoteController.js')


router.get('/ping',NoteController.ping);


router.get('/alunos',NoteController.all);
router.get('/aluno/:id',NoteController.one);
router.post('/aluno',NoteController.new);
router.put('/aluno/:id',NoteController.edit);
router.delete('/aluno/:id',NoteController.delete);


module.exports = router;