var Builder = {
	CompileMind: function() {
		// Define a model for linear regression.
		const model = NeuralNet.tf.sequential();
		model.add(NeuralNet.tf.layers.dense({units: 1, inputShape: [1]}));

		model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

		// Generate some synthetic data for training.
		var xs = NeuralNet.tf.tensor5d([1, 2, 3, 4], [4, 1]);
		var ys = NeuralNet.tf.tensor5d([1, 3, 5, 7], [4, 1]);
		

		// Train the model using the data.
		model.fit(xs, ys, {epochs: 1}).then(() => {
			// Use the model to do inference on a data point the model hasn't seen before:
			model.predict(NeuralNet.tf.tensor5d([5], [1, 1])).print();
			// Open the browser devtools to see the output
		});
	}
};
