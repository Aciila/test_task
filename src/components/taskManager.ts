import { Task } from './task';

/**
 * Manages a collection of tasks.
 */
export class TaskManager {
    private tasks: Task[] = [];

    /**
     * Adds a new task to the collection.
     * @param {Task} task - The task to be added.
     */
    public addTask(task: Task): void {
        this.tasks.push(task);
    }

    /**
     * Removes a task from the collection by its ID.
     * @param {number} id - The ID of the task to remove.
     */
    public removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    /**
     * Finds a task in the collection by its ID.
     * @param {number} id - The ID of the task to find.
     * @returns {Task | undefined} The task with the matching ID or undefined if not found.
     */
    public findTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    /**
     * Filters tasks by their completion status.
     * @param {boolean} completed - True for completed tasks, false for uncompleted.
     * @returns {Task[]} An array of tasks filtered by the completion status.
     */
    public filterByStatus(completed: boolean): Task[] {
        return this.tasks.filter(task => task.completed === completed);
    }

    /**
     * Sorts the tasks alphabetically by their title.
     * @returns {Task[]} An array of tasks sorted by title.
     */
    public sortByTitle(): Task[] {
        return this.tasks.slice().sort((a, b) => a.title.localeCompare(b.title));
    }
}
