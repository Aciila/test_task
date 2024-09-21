import { Task } from '../components/task';

describe('Task', () => {
    it('should create a new task with correct properties', () => {
        const task = new Task('Test title', 'Test description');

        expect(task.id).toBeDefined();  // ID should be defined
        expect(task.title).toBe('Test title');
        expect(task.description).toBe('Test description');
        expect(task.completed).toBe(false);  // Default status is uncomplete
    });

    it('should toggle the completed status of the task', () => {
        const task = new Task('Test title', 'Test description');

        task.toggleComplete();
        expect(task.completed).toBe(true);  // Status should be true after toggle

        task.toggleComplete();
        expect(task.completed).toBe(false);  // Status should return false after second toggle
    });

    it('should have unique IDs for different tasks', () => {
        const task1 = new Task('Task 1', 'Description 1');
        const task2 = new Task('Task 2', 'Description 2');

        expect(task1.id).not.toBe(task2.id);  // Each task should have a unique ID
    });
});
