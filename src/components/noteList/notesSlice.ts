import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CategoryName = 'Task' | 'Idea' | 'Random Thought';

type CategoryItem = {
  id: number,
  name: CategoryName,
  active: number,
  archive: number
}

export type Note = {
  id?: number,
  name: string,
  creationDate?: string,
  category: CategoryName,
  content: string,
  dates?: string,
  archived?: boolean,
}

interface NotesState {
  notes: Note[],
  categories: CategoryItem[],
  isUpdate: boolean,
  updateId: number
}

const initialState: NotesState = {
  notes: [
    {
      id: 1,
      name: `Go to shop`,
      creationDate: '2023-07-26',
      category: 'Task',
      content: 'Buy bread, juice',
      dates: '30/7/2023',
      archived: false,
    },
    {
      id: 2,
      name: `Go to cinema`,
      creationDate: '2023-07-26',
      category: 'Task',
      content: 'Oppenheimer',
      dates: '29/7/2023',
      archived: false,
    },
    {
      id: 3,
      name: `Create new feature`,
      creationDate: '2023-07-26',
      category: 'Idea',
      content: 'new feature',
      dates: '27/7/2023',
      archived: true,
    },
    {
      id: 4,
      name: `Create new feature2`,
      creationDate: '2023-07-26',
      category: 'Idea',
      content: 'new feature2',
      dates: '28/7/2023',
      archived: false,
    },
    {
      id: 5,
      name: `Some thought`,
      creationDate: '2023-07-26',
      category: 'Random Thought',
      content: 'Some thought',
      dates: '27/7/2023',
      archived: true,
    },
    {
      id: 6,
      name: `Some thought2`,
      creationDate: '2023-07-26',
      category: 'Random Thought',
      content: 'Some thought2',
      dates: '28/7/2023',
      archived: false,
    }
  ],
  categories: [
    {
      id: 1,
      name: 'Random Thought',
      active: 0,
      archive: 0
    },
    {
      id: 2,
      name: 'Idea',
      active: 0,
      archive: 0
    },
    {
      id: 3,
      name: 'Task',
      active: 0,
      archive: 0
    }
  ],
  isUpdate: false,
  updateId: 0
}

const dateRegex = /(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/g;
const findDates = (value: string): string => {
  const dates = value.match(dateRegex);
  if (!dates) return '';
  return dates.join(', ');
};

const calcSymmary = (notes: Note[], categories: CategoryItem[]): void => {
  categories.forEach(element => {
    element.active = notes.filter(el => el.category === element.name && el.archived === false).reduce((sum, obj) => sum + 1, 0);
    element.archive = notes.filter(el => el.category === element.name && el.archived === true).reduce((sum, obj) => sum + 1, 0);
  });
}

const makeNewNoteObj = (noteItem: Note) => ({
  id: Date.now(),
  name: noteItem.name,
  creationDate: new Date().toLocaleDateString('en-CA'),
  category: noteItem.category,
  content: noteItem.content,
  dates: findDates(noteItem.content),
  archived: false,
});

calcSymmary(initialState.notes, initialState.categories);


export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter(el => el.id !== action.payload);
      calcSymmary(state.notes, state.categories);
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const findItem = state.notes.find(el => el.id === action.payload);
      if(findItem) {
        findItem.archived = true;
      }
      calcSymmary(state.notes, state.categories);
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const findItem = state.notes.find(el => el.id === action.payload);
      if (findItem){
        findItem.archived = false;
      }
      calcSymmary(state.notes, state.categories);
    },
    addNewNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, makeNewNoteObj(action.payload)];
      calcSymmary(state.notes, state.categories);
    },
    changeUpdateStatus: (state, action: PayloadAction<boolean>) => {
      state.isUpdate = action.payload;
    },
    setUpdateId: (state, action: PayloadAction<number>) => {
      state.updateId = action.payload
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      state.notes.map((note) => {
        if (note.id === state.updateId) {
          const dates = findDates(action.payload.content) ? `${note.dates}, ${findDates(action.payload.content)}` : note.dates;
          Object.assign(note, action.payload, { dates });
        }
      });
    },

  },
})

// Action creators are generated for each case reducer function
export const { removeNote, archiveNote, unarchiveNote, addNewNote, changeUpdateStatus, setUpdateId, updateNote } = notesSlice.actions

export default notesSlice.reducer