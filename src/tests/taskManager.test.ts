import { Task } from '../components/task';
import { TaskManager } from '../components/taskManager';

describe('TaskManager', () => {
    let taskManager: TaskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    it('should add a task to the task manager', () => {
        const task = new Task('Test Task', 'Test Description');
        taskManager.addTask(task);

        expect(taskManager['tasks'].length).toBe(1);  // Verify that task is added
        expect(taskManager['tasks'][0]).toEqual(task);  // Task should be the same
    });

    it('should remove a task by ID', () => {
        const task1 = new Task('Task 1', 'Description 1');
        const task2 = new Task('Task 2', 'Description 2');

        taskManager.addTask(task1);
        taskManager.addTask(task2);

        taskManager.removeTask(task1.id);

        expect(taskManager['tasks'].length).toBe(1);  // Only one task should remain
        expect(taskManager['tasks'][0]).toEqual(task2);  // The remaining task should be task2
    });

    it('should find a task by ID', () => {
        const task = new Task('Test Task', 'Test Description');
        taskManager.addTask(task);

        const foundTask = taskManager.findTaskById(task.id);
        expect(foundTask).toEqual(task);  // Task should be found by ID
    });

    it('should return undefined if task not found by ID', () => {
        const foundTask = taskManager.findTaskById(999);
        expect(foundTask).toBeUndefined();  // No task with this ID
    });

    it('should filter tasks by completed status', () => {
        const task1 = new Task('Task 1', 'Description 1');
        const task2 = new Task('Task 2', 'Description 2');
        const task3 = new Task('Task 3', 'Description 3');

        taskManager.addTask(task1);
        taskManager.addTask(task2);
        taskManager.addTask(task3);

        task2.toggleComplete();  // Mark one task as complete

        const completedTasks = taskManager.filterByStatus(true);
        const notCompletedTasks = taskManager.filterByStatus(false);

        expect(completedTasks.length).toBe(1);  // One completed task
        expect(completedTasks[0]).toEqual(task2);  // It should be task2

        expect(notCompletedTasks.length).toBe(2);  // Two incomplete tasks
        expect(notCompletedTasks).toContain(task1);
        expect(notCompletedTasks).toContain(task3);
    });

    it('should sort tasks by title in alphabetical order', () => {
        const task1 = new Task('B Task', 'Description 1');
        const task2 = new Task('C Task', 'Description 2');
        const task3 = new Task('A Task', 'Description 3');

        taskManager.addTask(task1);
        taskManager.addTask(task2);
        taskManager.addTask(task3);

        const sortedTasks = taskManager.sortByTitle();

        expect(sortedTasks[0]).toEqual(task3);  // 'A Task' should be first
        expect(sortedTasks[1]).toEqual(task1);  // 'B Task' second
        expect(sortedTasks[2]).toEqual(task2);  // 'C Task' third
    });
});
