$(document).ready(function() {
		// Adiciona uma nova tarefa à lista
		$('#task-form').submit(function(event) {
		event.preventDefault();
		var taskName = $('#task-name').val();
		if (taskName) {
			var taskItem = $('<li>').text(taskName);
			$('#task-list').append(taskItem);
			$('#task-name').val('');
	}
		});
		// Marca uma tarefa como concluída
		$('#task-list').on('click', 'li', function() {
			$(this).toggleClass('completed');
		});
});