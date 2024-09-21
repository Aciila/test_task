/**
 * Represents a task in the system.
 */
export class Task {
	public id: number;
	public title: string;
	public description: string;
	public completed: boolean;

	private static lastId = 0;

	/**
	 * Creates a new Task instance.
	 * @param {string} title - The title of the task.
	 * @param {string} description - A brief description of the task.
	 */
	constructor(title: string, description: string) {
			this.id = Task.getNextId();
			this.title = title;
			this.description = description;
			this.completed = false;
	}

	/**
	 * Toggles the completed status of the task.
	 */
	public toggleComplete(): void {
			this.completed = !this.completed;
	}

	/**
	 * Generates the next unique ID for the task.
	 * @returns {number} The next task ID.
	 */
	private static getNextId(): number {
			return ++Task.lastId;
	}
}
