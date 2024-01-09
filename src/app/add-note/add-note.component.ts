//import { isNull, NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { allowedNodeEnvironmentFlags } from 'process';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  showValidationErrors:Boolean=false


  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){
    console.log(form)
    if(form.invalid) this.showValidationErrors=true
      const note =new Note(form.value.title, form.value.content)
      this.noteService.addNote(note)
      this.router.navigateByUrl("/notes")
    
  }

}
