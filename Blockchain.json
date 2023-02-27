class Blockchain:
    """
    Código anterior...
    """

    def add_block(self, block, proof):
        """
        Una función que agrega el bloque a la cadena luego de la verificación.
        La verificación incluye:
        * Chequear que la prueba es válida.
        * El valor del previous_hash del bloque coincide con el hash del último
          bloque de la cadena.
        """
        previous_hash = self.last_block.hash
 
        if previous_hash != block.previous_hash:
            return False
 
        if not self.is_valid_proof(block, proof):
            return False
 
        block.hash = proof
        self.chain.append(block)
        return True
 
    def is_valid_proof(self, block, block_hash):
        """
        Chquear si block_hash es un hash válido y satisface nuestro
        criterio de dificultad.
        """
        return (block_hash.startswith('0' * Blockchain.difficulty) and
                block_hash == block.compute_hash())
