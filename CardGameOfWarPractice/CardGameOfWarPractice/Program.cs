using Microsoft.VisualBasic;

namespace CardGameOfWarPractice
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Initialize the main players
            Player player1 = new Player("John Doe");
            Player player2 = new Player("Steve Smith");

            //Initialize the deck and shuffle it

            Deck deck = new Deck();
            deck.Shuffle();


            //Distrubute cards to players
            while (deck.HasCards())
            {
                player1.ReceiveCard(deck.DealOneCard());
                player2.ReceiveCard(deck.DealOneCard());
            }

            //play game now

            while (player1.HasCards() && player2.HasCards())
            {

                Card card1 = player1.PlayCard();
                Card card2 = player2.PlayCard();

                Console.WriteLine($"{player1.Name} plays {card1} and {player2.Name} plays {card2}");

                if (card1.Value > card2.Value) 
                {

                    Console.WriteLine($"{player1.Name} wins the round!");

                    //adding card won to player 1
                    player1.Hand.Add(card2);

                    //removing lost card
                    player2.Hand.Remove(card2);

                }
                else if (card2.Value > card1.Value)
                {
                    Console.WriteLine($"{player2.Name} wins the round!");
                    player2.Hand.Add(card1);
                    player1.Hand.Remove(card1);
                }
                else
                {
                    Console.WriteLine($"It's a tie! War");

                    if (player1.Hand.Count < 3 || player2.Hand.Count < 3)
                    {
                        Console.WriteLine("Not enough cards to continue the war!");
                        if (player1.Hand.Count < 3)
                            Console.WriteLine("Player2 wins by surrender!");
                        else if (player2.Hand.Count < 3)
                            Console.WriteLine($"Player1 wins by surrender");
                        return;
                    }

                    Card card3 = player1.PlayCard();
                    Card card4 = player1.PlayCard();
                    Card card5 = player1.PlayCard();
                    
                    Card card6 = player2.PlayCard(); 
                    Card card7 = player2.PlayCard();
                    Card card8 = player2.PlayCard();

                    Card card9 = player1.PlayCard();
                    Card card10 = player2.PlayCard();

                    if (card10.Value > card9.Value) 
                    {
                        Console.WriteLine($"{player2.Name} Wins!");
                        player2.Hand.Add(card1);
                        player2.Hand.Add(card2);
                        player2.Hand.Add(card3);
                        player2.Hand.Add(card4);
                        player2.Hand.Add(card5);
                        player2.Hand.Add(card6);
                        player2.Hand.Add(card7);
                        player2.Hand.Add(card8);
                        player2.Hand.Add(card9);
                        player2.Hand.Add(card10);

                        player1.Hand.Remove(card1);
                        player1.Hand.Remove(card2);
                        player1.Hand.Remove(card3);
                        player1.Hand.Remove(card4);
                        player1.Hand.Remove(card5);
                        player1.Hand.Remove(card6);
                        player1.Hand.Remove(card7);
                        player1.Hand.Remove(card8);
                        player1.Hand.Remove(card9);
                        player1.Hand.Remove(card10);
                    }
                    else if (card10.Value < card9.Value) 
                    {
                        Console.WriteLine($"{player1.Name} Wins!");
                        player1.Hand.Add(card1);
                        player1.Hand.Add(card2);
                        player1.Hand.Add(card3);
                        player1.Hand.Add(card4);
                        player1.Hand.Add(card5);
                        player1.Hand.Add(card6);
                        player1.Hand.Add(card7);
                        player1.Hand.Add(card8);
                        player1.Hand.Add(card9);
                        player1.Hand.Add(card10);

                        player2.Hand.Remove(card1);
                        player2.Hand.Remove(card2);
                        player2.Hand.Remove(card3);
                        player2.Hand.Remove(card4);
                        player2.Hand.Remove(card5);
                        player2.Hand.Remove(card6);
                        player2.Hand.Remove(card7);
                        player2.Hand.Remove(card8);
                        player2.Hand.Remove(card9);
                        player2.Hand.Remove(card10);
                    }
                }

            }
            //Determine the winner
            if (player1.HasCards())
            {
                Console.WriteLine($"{player1.Name} wins the game!");

            }
            else
            {
                Console.WriteLine($"{player2.Name} wins the game!");
            }


            //Okay so we need a card class, deck class, player class?


        }
    }
}