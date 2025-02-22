document.getElementById('chat-icon').addEventListener('click', function () {
	let chatContainer = document.getElementById('chat-container');
	chatContainer.style.display =
		chatContainer.style.display === 'none' || chatContainer.style.display === ''
			? 'flex'
			: 'none';
});

// Handle sending a message
document.getElementById('sendBtn').addEventListener('click', function () {
	let userMessage = document.getElementById('user-input').value.trim();
	if (!userMessage) return; // Skip if the input is empty

	let chatBody = document.getElementById('chat-body');

	// Check for keywords that reset the conversation (start over)
	const resetKeywords = ['start over', 'new conversation'];
	if (
		resetKeywords.some((keyword) => userMessage.toLowerCase().includes(keyword))
	) {
		// Reset the chat if one of the reset keywords is detected
		chatBody.innerHTML = `
            <div class="chat-message bot">
                <strong>LeaBot:</strong> Hello! 👋 I'm here to help with your maternal health questions. To get started, simply type your message in the chat space below. <br /><br />
                <strong>How to use:</strong>
                <ul>
                    <li><strong>Start a conversation:</strong> Just type your question, hit send, and I'll assist you!</li>
                    <li><strong>End the conversation:</strong> Type and send <em>"bye"</em>, or <em>"quit"</em> to end our chat.</li>
                    <li><strong>Restart the conversation:</strong> Type and send <em>"start over"</em> or <em>"new conversation"</em> to begin again.</li>
                </ul>
                I look forward to helping you! 😊
            </div>
        `;
		document.getElementById('user-input').value = ''; // Clear the input field
		chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat
		return; // Skip sending the message to the bot
	}

	// Check for keywords that end the conversation
	const endKeywords = ['bye', 'quit'];
	if (
		endKeywords.some((keyword) => userMessage.toLowerCase().includes(keyword))
	) {
		// End the conversation if one of the end keywords is detected
		chatBody.innerHTML += `<div class="chat-message user"><strong>You:</strong> ${userMessage}</div>`;
		chatBody.innerHTML += `<div class="chat-message bot"><strong>LeaBot:</strong> Goodbye! If you need help later, feel free to come back. 😊</div>`;
		document.getElementById('user-input').value = ''; // Clear the input field
		chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat

		// Optionally, you can hide the chat container here to simulate ending the conversation
		setTimeout(function () {
			document.getElementById('chat-container').style.display = 'none';
		}, 1500); // Wait 1.5 seconds before closing the chat window
		return; // Skip sending the message to the bot
	}

	// Show the "thinking" message
	document.getElementById('loading-indicator').style.display = 'block';

	// Otherwise, process the user's message and send it to the chatbot
	chatBody.innerHTML += `<div class="chat-message user"><strong>You:</strong> ${userMessage}</div>`;
	document.getElementById('user-input').value = ''; // Clear the input field

	chatBody.scrollTop = chatBody.scrollHeight;

	// Fetch bot response
	fetch('/chat', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message: userMessage }),
	})
		.then((response) => response.json())
		.then((data) => {
			// Hide the "thinking" message once the response is received
			document.getElementById('loading-indicator').style.display = 'none';

			// Show the bot's response
			chatBody.innerHTML += `<div class="chat-message bot"><strong>LeaBot:</strong> ${data.response}</div>`;
			chatBody.scrollTop = chatBody.scrollHeight; // Scroll to show the new message
		});
});
