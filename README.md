# A* Pathfinder

This project incorporates randomized Prim's algorithm for maze generation as well as A* search algorithm for solving the generated maze


## Randomized Prim's Algorithm

Begin with a 25x25 2D grid with each node (cell) lined with walls on all four sides. Create a toVisit list and visited list for nodes. Start by selecting a random node and adding it to the toVisit list. Now follow these steps while there are still nodes in the toVisit list:
    1. Pop the node from the toVisit list, mark it as the current node, then add it to the visited list.
    2. Find all frontiers (neighbors) of the current node and randomize their order
    4. For each frontier in this frontiers list, check if it is in the toVisit and visited list
    5. If in neither, break the wall dividing the current node and that frontier then push the frontier to the toVisit list.
    6. Else, continue to the next frontier.


## A* Search Algorithm

Terminology:
    Start node - very first node in the maze (0, 0)
    End node - very last node in the maze (24, 24)
    Cost - distance between one node to another node
    g - exact cost from start node to some node n
        Frontier.g = currentNode.g + cost
    h - heuristic estimated cost from node n to end node
    f - lowest cost in the frontier node n
        f = g + h

Create an open set and a closed set. Push the start node to the open set and do the following steps while there are still nodes in the open set:
    1. Remove the node with the lowest f cost from the open set, mark it as the current node, then add it to the closed set.
    2. If the current node is the end node, then congratulations you win!
    3. Else, get the frontiers of the current node.
    4. For each frontier, check if the path between the current node and frontier can be traversed (no wall) and if the frontier is not on the closed set
    5. If true, calculate g, h, and f for the frontier
    6. If the frontier is already in the open set AND the frontier's g value is higher than the current node's g value, continue to the next node
    7. Else, push the frontier to the open set and make it's parent equal to the current node.


## Optimal Path

Create a current node variable and set it equal to the end node. While current node has a parent:
    1. Find the parent node in the maze and mark it as a path node
    2. Set the current node equal to it's own parent