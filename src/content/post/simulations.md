---
title: "Simulations"
description: "How iOS engineers try to imitate reality in their labs 🧪"
publishDate: "21 Feb 2024"
tags: ["iOS", "SwiftUI", "Swift", "side-projects"]
---

# Lex, Elon and their thoughts on our existence

The other day, I ran a couple of kilometers while listening to one of my favorite podcasts: The [Lex Fridman Podcast](https://podcasts.apple.com/ar/podcast/lex-fridman-podcast/id1434243584). In a world full of instant gratification, fifteen-second viral content, quick answers to hard problems, and infinite scrolling, the interviews conducted by Lex (ranging from one to nine hours in duration and featuring deep human questions that intersect various disciplines) are like a rare diamond for me.

The show was [#400](https://podcasts.apple.com/ar/podcast/lex-fridman-podcast/id1434243584?i=1000634296338), the 4th round between Lex and Elon Musk. I don't think I need to introduce Elon Musk.

They talked about a bunch of things: the two wars that (sadly) are happening right now, Grok (the AI model created by X), the existence of aliens, video games (both play Diablo), a bit of futurology, dystopian worlds influenced by Aldous Huxley, and much more. I highly recommend listening to it.

I was more or less in the middle of my training, sweating profusely, when [they started discussing about God](https://lexfridman.com/elon-musk-4-transcript#chapter8_god). What a topic to talk about, huh? It was a relatively short exchange of ideas compared to the other chapters of the interview, but it completely captured my attention. Lex suggested that it seems like there is a master plan, a *something* or *someone* that orchestrates this spectacle we call reality. If true, life is somewhat deterministic. There is a *plan*, created by something we often refer to as God; this plan is executed, and all its rules are set in stone. We live our lives believing that we're free, but in reality, there is something larger than us that designed our environment and all the possible paths a life can take. If the plan is made by someone with good intentions, everything should go well, right?

Elon threw an interesting follow-up question in response to that idea:

> *There may not be a master plan in the sense. So maybe an interesting answer to the question of determinism versus free will is that if we are in a simulation, the reason that these higher beings would hold a simulation is **to see what happens**. So they don’t know what happens otherwise they wouldn’t hold the simulation. So when humans create a simulation, so it’s SpaceX and Tesla, we create simulations all the time. Especially for the rocket, you have to run a lot of simulations to understand what’s going to happen because you can’t really test the rocket until it goes to space and you want it to work. So you have to simulate subsonic, transonic, supersonic, hypersonic, ascend, and then coming back, super high heating and orbital dynamics. All this has got to be simulated because you don’t get very many kicks at the can. But we run the simulations to see what happens, not if we knew what happens, we wouldn’t run the simulation. So whoever created this existence, they’re running it because they don’t know what’s going to happen, not because they do.*
> 

It's not the first time Elon has suggested we're [living in a simulation](https://www.google.com/search?q=we%27re+living+on+a+simulation+elon+musk&sourceid=chrome&ie=UTF-8).

That paragraph gave me chills. I rewound the interview a few seconds to listen to it again.

# From philosophy and weird thoughts to iOS development

*Disclaimer 1:* I don't know whether we live in a simulation or not. I don't even know *if there is a way to find out.* It's an interesting philosophical discussion, but I'm not prepared for it, I think.

*Disclaimer 2:* I don't create rockets or electric cars. I believe I possess 0.0000000001% of the knowledge required to participate in that complex process.

BUT! As a random engineer who writes Swift code for a living, I do work with simulations all the time:

- We (iOS devs) use the Simulator app to test our code on different Apple devices: iPhones, iPads, Macs, Apple Watches, etc. They have limited functionality (for example, you cannot open the camera on an iOS simulator), but for the vast majority of features, it's really useful.
- Every time we need to perform communication between our client code and a web service, we tend to use different **environments**. The production environment is the real database, where your actual users are, but there are copies of that database with fake information to allow developers to test the functionality they're working on. Production is like SpaceX's rockets in real space, and staging or development environments are the labs where the rockets are tested. (Remember: please DO NOT test in production!)
- When writing unit tests or UI tests, we generally tend to **inject** mock services into our logic, allowing us to focus our attention on the piece of software under test. In the case of unit tests, it could be a View Model into which we inject mock services to focus solely on the logic inside the VM, in all possible scenarios.
- `SwiftUI` previews are a new type of UI simulation for us. We can set up different device configurations and see how the UI responds to them: color schemes, device orientations, dynamic font sizes, localization, etc.

<img src="/previews-fitterfly.png" alt="Screenshot of a SwiftUI preview on my side project 📱">

All the examples (from environmental simulations for rockets to simple mock responses on API calls) share the same principles: they are **models** that reduce reality to a set of controllable conditions, to see how our creations respond to them. Again, they are **models**, representations of reality, and it can happen that our models are not 100% accurate to the real world. But it’s a practical way to speed up the building process, and it seems like it works, given the current state of the art in the industry.

I'd like to elaborate on a specific type of simulation (in fact, a way to *facilitate the use of simulations*) that's commonly found in well-designed iOS projects (and in software projects in general): dependency management in our business logic.

- How can we unit test logic that includes communication with a web service or an SDK?
- How can we avoid using a real web service or SDK in our `SwiftUI` previews?
- How can we test every possible scenario (that we know of) on a particular screen, and have a preview for each one?

I'll demonstrate here how I addressed these questions in the side project I'm working on, a fitness app called *Fitterfly* (which has not yet been uploaded to the App Store 😄 (1)). After that, I'll mention a few alternatives I encountered in my journey as an iOS developer.

---

*(1) However, we have a mini Pre-MVP available on TestFlight! Please let me know if you'd like to give it a try and provide feedback. Your input would be greatly appreciated.*

# A couple of words about Fitterfly

Fitterfly is a `SwiftUI`based app with a couple of third-party dependencies available using Swift Package Manager. Nothing fancy, to be honest.

Regarding architecture, I wanted to learn something different from the current stack I'm using in my full-time job (mostly `MVVM` + `UIKit` + `RxSwift`). Also, I enjoy working with functional paradigms: pure functions, isolated side effects, state machines, etc. These two constraints led me to [The Composable Architecture (TCA)](https://github.com/pointfreeco/swift-composable-architecture).

I'm still learning, but for now, I can say that I love having isolated features that can be easily modularized in the future. I like having side effects grouped in one file per feature and an architecture that's more in sync with the `SwiftUI` UI paradigm. `SwiftUI` is similar to `React`, and `TCA` is like `Redux`.

# Swift Dependencies

But I'm not here to talk about TCA. You can read about it [here](https://www.pointfree.co/collections/composable-architecture). I'm here to talk about a package also created by Point Free, which is included when you use TCA, but you can also use it independently. It's called `Swift Dependencies`. Here's the [repo](https://github.com/pointfreeco/swift-dependencies), and here's the [documentation](https://swiftpackageindex.com/pointfreeco/swift-dependencies/main/documentation/dependencies). Also, here's a [video series](https://www.pointfree.co/collections/dependencies/designing-dependencies) from Point Free authors about designing dependencies (I think it was the precondition that led them to write and publish the `Swift Dependencies` package, but I'm not sure about it).

When they talk about dependencies, they define them in a general way that opens your mind:

> *Dependencies are the types and functions in your application that need to interact with outside systems that you do not control.*
> 

*"Outside systems that you do not control."* Clearly, the backend communication in your app is one example (the most obvious one): it's a completely separate piece of software, likely written in a different language, using different technologies, and possibly written by other members of your team. Another example could be iOS SDKs: a third-party open-source library or an Apple library.

But also, some `Swift` types can be treated as dependencies! For example, a `Date` initializer: if you create a `Date` object, it will give you the current date, now. Let’s say you have a unit test which needs to validate that a user is less than 18 years old, given their birth date. If you compare their birth date with a new date by using the `Date`'s initializer, you'll have a different comparison depending on the time when you run the unit test! And this is something *you don’t control, it's something **external** that affects your system.*

It would be awesome to *control* external dependencies like this one, or to *simulate* different possible conditions, like Elon Musk and his team do with rockets.

## Creating and using dependencies

As I mentioned, the best resource for starting to work with `Swift Dependencies` is its own documentation. However, I'll provide a quick real use case for:

- Designing, creating, and using a simple dependency.
- Advantages (mocks, `SwiftUI` previews, and unit tests).

*Note: At the end of the article, you'll find a link to download a complete sample project with all the code explained below. It's free, but you can choose to pay if you wish. If you do, know that you're creating an incentive for me to continue writing these types of posts (and making me a happier person, because I'll believe that my words are truly helping people out there 🙂).*

### Creating a dependency

Let's say we're building an app for an art museum (for example, the [Art Institute of Chicago](https://www.artic.edu/)). And let's say that we need to integrate the [REST service they have](https://api.artic.edu/docs/#quick-start) in order to populate our app with data.

We will focus our attention on a single scenario: on the app's home page, we need to display a list of artworks using [the artworks endpoint](https://api.artic.edu/docs/#collections). It would be awesome if we had a way to:

- At the view level:
    - Reproduce all possible scenarios (like a full list of items, an empty list, an API error, etc.) and see how the UI reacts to them.
- At the business logic level:
    - Add unit tests to cover all possible scenarios described above.

Assuming we have our project already set up with the `Swift Dependencies` package in place, let's focus our attention on creating the backend dependency.

The first thing to think about is its high-level appearance. Usually, we define it by using `protocols`, and then we have concrete implementations depending on the case. A common example can be:

```swift
// MARK: Interface

protocol ChicagoArtInstituteService {
	func fetchArtworks() async throws -> ArtworkResponse
}

// MARK: Live implementation

class LiveChicagoArtInstituteService: ChicagoArtInstituteService {
	func fetchArtworks() async throws -> ArtworkResponse {
		// Your concrete API request implementation using URLSession, Alamofire or
		// whatever networking tool you want to use.
	}
}

// MARK: Test implementation

class MockChicagoArtInstituteService: ChicagoArtInstituteService {
	func fetchArtworks() async throws -> ArtworkResponse {
		// Your concrete mock implementation.
	}
}
```

This is clean! However, to reproduce all possible scenarios in a simulated environment like `SwiftUI` previews, we'll need to create different mock implementations for each case (one to return an empty list, another for a list with artworks, etc.). If there's a change in the API contract, we'll need to update each mock implementation, plus the live one, to reflect it. And that's... not fun.

This problem is deeply explained in [this Point-Free episode](https://www.pointfree.co/collections/dependencies/designing-dependencies/ep110-designing-dependencies-the-problem#t1693), in the last section titled *“Protocol-oriented problems”.* An improvement to overcome this issue is to use `structs` instead of `protocols`. One large `struct` can hold both live and mock implementations as properties:

```swift
import Dependencies

// MARK: - Service interface (1)

struct ChicagoArtInstituteService {
    var fetchArtworks: () async throws -> ArtworkResponse
}

// MARK: - Test implementation (2)

extension ChicagoArtInstituteService: TestDependencyKey {
    static let previewValue = Self(
        fetchArtworks: {
            ArtworkResponse.happyPathMock  // (2.a)
        }
    )
}

// MARK: - Live implementation (3)

extension ChicagoArtInstituteService: DependencyKey {
    static let liveValue = Self(
        fetchArtworks: {
            // (3.a)
        }
    )
}

// MARK: - Dependency registration (4)

extension DependencyValues {
    var chicagoArtInstituteService: ChicagoArtInstituteService {
        get {
            self[ChicagoArtInstituteService.self]
        }
        set {
            self[ChicagoArtInstituteService.self] = newValue
        }
    }
}
```

Let's explain a bit about what's happening here:

1. We created a `struct` that serves as the service's interface. Each API call is a property.
2. We adopted the `TestDependencyKey` `protocol`, from the `Swift Dependencies` package, to set all our mock dependencies.
    1. I won't include the complete `ArtworkResponse` `struct` here because it's a lengthy model (it has many properties). If you want to check it out, download the sample project.
        
        As for the `happyPathMock` property, it's a `static` property that represents a response with a list of items, our happy path. Something like this:
        
        ```swift
        static let happyPathMock = {
            let mockJSON = """
            {
                "data": [
                    // the list of items goes here!
                ]
            }
            """
        
            let decoder = JSONDecoder()
            decoder.keyDecodingStrategy = .convertFromSnakeCase
        
            guard
                let jsonData = mockJSON.data(using: .utf8)
            else {
                debugPrint(
                    "Error: Cannot create Data from mockJSON"
                )
                return ArtworkResponse(data: [])
            }
        
            do {
                let mockResponse = try decoder.decode(
                    ArtworkResponse.self,
                    from: jsonData
                )
                return mockResponse
            } catch {
                debugPrint(
                    "Error decoding mock JSON: \(error)"
                )
                return ArtworkResponse(data: [])
            }
        }()
        ```
        
3. We did the same for `DependencyKey`, defining the actual implementation, the dependency that will be used in production to make the API call to the backend.
    1. This closure is the actual implementation of the API call. It's your choice, but if you want to use `URLSession`, here is a possible (simplified) implementation:
        
        ```swift
        // MARK: - Live implementation
        
        extension ChicagoArtInstituteService: DependencyKey {
            static let liveValue = Self(
                fetchArtworks: {
                    guard
                        let url = URL(string: Constants.baseURL + "/artworks")
                    else {
                        throw ArtworkError.invalidURL
                    }
        
                    do {
                        let (data, response) = try await URLSession.shared.data(from: url)
        
                        guard
                            let httpResponse = response as? HTTPURLResponse,
                            httpResponse.statusCode == 200
                        else {
                            throw ArtworkError.requestFailed(
                                URLError(.badServerResponse)
                            )
                        }
        
                        let decoder = JSONDecoder()
                        let artworkResponse = try decoder.decode(
                            ArtworkResponse.self,
                            from: data
                        )
        
                        return artworkResponse
                    } catch {
                        throw ArtworkError.decodingError(error)
                    }
                }
            )
        }
        
        // MARK: - Service Errors
        
        extension ChicagoArtInstituteService {
            enum ArtworkError: Error {
                case invalidURL
                case requestFailed(Error)
                case decodingError(Error)
            }
        }
        ```
        
        `ArtworkError` is an enum that represents several error cases that can occur.
        
4. We registered the created dependency.

### Using the dependency

A user of the created dependency can be a view model. In our case, the view model is responsible for binding the view with the data that comes from the backend. Here's a proposed implementation of it:

```swift
import Dependencies
import Foundation

// MARK: - ArtworksViewModel

final class ArtworksViewModel: ObservableObject {

    // MARK: Observable properties

    @Published
    var artworks: [Artwork] = []

    @Published
    var isLoading = false

    @Published
    var errorMessage: String?

    @Published
    var apiError: Bool = false

    // MARK: Dependencies

    @Dependency(\.chicagoArtInstituteService)
    private var chicagoArtInstituteService

    // MARK: Methods

    @MainActor
    func loadArtworks() async {
        isLoading = true
        do {
            let response = try await chicagoArtInstituteService.fetchArtworks()
            artworks = response.data
        } catch {
            debugPrint("Failed to fetch artworks: \(error)")

            apiError = true
            if let error = error as? ChicagoArtInstituteService.ArtworkError {
                switch error {
                case .decodingError(_):
                    errorMessage = ".decodingError :("
                case .invalidURL:
                    errorMessage = ".invalidURL :("
                case .requestFailed(_):
                    errorMessage = ".requestFailed :("
                }
            } else {
                errorMessage = error.localizedDescription
            }
        }
        isLoading = false
    }
}
```

A couple of important points:

- The `Dependencies` section, in which we *inject* the dependency with a property wrapper that's found in `Swift Dependencies`.
- `loadArtworks()` function, in which we *use* the dependency to retrieve data and modify the observable properties accordingly.

Let's define a simple `SwiftUI` view that uses the view model and displays the data to the end user:

```swift
import SwiftUI

// MARK: - ArtworksView

struct ArtworksView: View {

    // MARK: Properties

    @ObservedObject
    private var viewModel: ArtworksViewModel

    // MARK: Views

    var body: some View {
        NavigationStack {
            List(viewModel.artworks, id: \.id) { artwork in
                VStack(alignment: .leading) {
                    Text(artwork.title)
                        .fontWeight(.bold)
                    Text(artwork.artistTitle ?? "Unknown")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
            }
            .navigationTitle("Artworks")
            .onAppear {
                Task {
                    await viewModel.loadArtworks()
                }
            }
            .overlay {
                if viewModel.isLoading {
                    ProgressView("Loading...")
                } else if viewModel.artworks.isEmpty {
                    Text("Nothing to show here 🤐")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
            }
            .alert(
                "Error",
                isPresented: $viewModel.apiError,
                presenting: viewModel.errorMessage
            ) { detail in
                Button("OK", role: .cancel) { }
            } message: { detail in
                Text(detail)
            }
        }
    }

    // MARK: Initializers

    init(viewModel: ArtworksViewModel) {
        self.viewModel = viewModel
    }
}
```

### What advantages do we gain from this implementation?

As we previously stated, we'd like to easily *swap behaviors*, *simulate different environments* not only to test our view models, but also our views!

#### View Models & unit tests

We can override the view model dependencies by using a powerful function from `Swift Dependencies` called `[withDependencies](https://swiftpackageindex.com/pointfreeco/swift-dependencies/main/documentation/dependencies/withdependencies(_:operation:)-4uz6m)`. With this, we can unit test every possible escenario.

First, let's create more test dependencies to represent additional outcomes:

```swift
// MARK: - Test implementation

extension ChicagoArtInstituteService: TestDependencyKey {
    static let previewHappyPathValue = Self(
        fetchArtworks: {
            ArtworkResponse.happyPathMock
        }
    )

    static let previewEmptyList = Self(
        fetchArtworks: {
            ArtworkResponse.emptyListMock
        }
    )

    static let invalidURL = Self(
        fetchArtworks: {
            throw ArtworkError.invalidURL
        }
    )

    static let decodingError = Self(
        fetchArtworks: {
            throw ArtworkError.decodingError(
                DecodingError.dataCorrupted(
                    DecodingError.Context(
                        codingPath: [Artwork.CodingKeys.altArtistIds],
                        debugDescription: "There was an error while decoding keys"
                    )
                )
            )
        }
    )

    static let requestFailed = Self(
        fetchArtworks: {
            throw ArtworkError.requestFailed(
                URLError(.badServerResponse)
            )
        }
    )
}
```

And then, let's create a couple of unit tests to cover them at the view model level:

```swift
import XCTest
import Dependencies

@testable import SimulationsArticle

final class ArtworksViewModelTests: XCTestCase {

    // MARK: Private Properties

    private var sut: ArtworksViewModel!

    // MARK: Set up, Tear down

    override func tearDownWithError() throws {
        sut = nil
    }

    // MARK: Tests

    func test_artworksArray_withHappyPathMock_shouldHaveOneItem() async throws {
        sut = withDependencies {
            $0.chicagoArtInstituteService = .previewHappyPathValue
        } operation: {
            ArtworksViewModel()
        }

        await sut.loadArtworks()

        XCTAssertEqual(sut.artworks.count, 1)
        XCTAssertNil(sut.errorMessage)
        XCTAssertFalse(sut.apiError)
    }

    func test_artworksArray_withEmptyMock_shouldHaveZeroItems() async throws {
        sut = withDependencies {
            $0.chicagoArtInstituteService = .previewEmptyList
        } operation: {
            ArtworksViewModel()
        }

        await sut.loadArtworks()

        XCTAssertEqual(sut.artworks.count, 0)
        XCTAssertNil(sut.errorMessage)
        XCTAssertFalse(sut.apiError)
    }

    func test_artworksArray_withInvalidURLMockError_shouldHaveZeroItems_andCorrespondingErrorMessage() async throws {
        sut = withDependencies {
            $0.chicagoArtInstituteService = .invalidURL
        } operation: {
            ArtworksViewModel()
        }

        await sut.loadArtworks()

        XCTAssertEqual(sut.artworks.count, 0)
        XCTAssertEqual(sut.errorMessage, ".invalidURL :(")
        XCTAssertTrue(sut.apiError)
    }

    func test_artworksArray_withDecodingMockError_shouldHaveZeroItems_andCorrespondingErrorMessage() async throws {
        sut = withDependencies {
            $0.chicagoArtInstituteService = .decodingError
        } operation: {
            ArtworksViewModel()
        }

        await sut.loadArtworks()

        XCTAssertEqual(sut.artworks.count, 0)
        XCTAssertEqual(sut.errorMessage, ".decodingError :(")
        XCTAssertTrue(sut.apiError)
    }

    func test_artworksArray_withRequestFailedMockError_shouldHaveZeroItems_andCorrespondingErrorMessage() async throws {
        sut = withDependencies {
            $0.chicagoArtInstituteService = .requestFailed
        } operation: {
            ArtworksViewModel()
        }

        await sut.loadArtworks()

        XCTAssertEqual(sut.artworks.count, 0)
        XCTAssertEqual(sut.errorMessage, ".requestFailed :(")
        XCTAssertTrue(sut.apiError)
    }
}
```

#### `SwiftUI` views & previews

We can use `withDependencies` + test dependencies to simulate each scenario in `SwiftUI` previews:

```swift
// MARK: - Previews

#Preview("Happy path") {
    withDependencies {
        $0.chicagoArtInstituteService = .previewHappyPathValue
    } operation: {
        ArtworksView(viewModel: ArtworksViewModel())
    }
}

#Preview("Empty list") {
    withDependencies {
        $0.chicagoArtInstituteService = .previewEmptyList
    } operation: {
        ArtworksView(viewModel: ArtworksViewModel())
    }
}

#Preview("API error: .invalidURL") {
    withDependencies {
        $0.chicagoArtInstituteService = .invalidURL
    } operation: {
        ArtworksView(viewModel: ArtworksViewModel())
    }
}

#Preview("API error: .requestFailed") {
    withDependencies {
        $0.chicagoArtInstituteService = .requestFailed
    } operation: {
        ArtworksView(viewModel: ArtworksViewModel())
    }
}

#Preview("API error: .decodingError") {
    withDependencies {
        $0.chicagoArtInstituteService = .decodingError
    } operation: {
        ArtworksView(viewModel: ArtworksViewModel())
    }
}
```

And this is the visual result:

<img src="/happy-path-preview.png" alt="Happy path">
<img src="/empty-list-preview.png" alt="Empty list">
<img src="/api-error-preview.png" alt="API error">

# Wrapping up

We didn't simulate subsonic, transonic, or supersonic dynamics for rockets, nor did we conclude whether we live in a simulation. However, we were able to experiment with different environments on a sample iOS app and observe them in action at both the view model and view level! We can do the same for any future dependencies, decoupling our app from external elements, which is a superpower. A real-life example that illustrates this power: we needed to deploy a TestFlight version of Fitterfly for some users, solely to display the UI and gauge their reaction. The backend wasn't ready. I was able to switch from real backend communication to mocks with a single `withDependencies` call at the app's starting point. It was magic. Easy.

As a side note, it's worth mentioning that `Swift Dependencies` is not the only package that can accomplish what we have achieved. I chose it because, as I mentioned, I'm using `TCA` and `SwiftUI` in Fitterfly, and it's well-integrated with them. However, your project's needs or characteristics may differ, and you should use critical thinking to decide the best option for your case. Here are some alternatives:

- [`Factory`](https://github.com/hmlongco/Factory) (also influenced by the `SwiftUI's` `Environment` pattern).
- [`ServiceLocator`](https://stevenpcurtis.medium.com/the-service-locator-pattern-in-swift-5db2c770bcc) pattern.
- Dependency Injection with other techniques (like constructor injection or method injection).
- And much more.

If you know of other libraries or ways to accomplish similar behaviors, please mention them in the comments below or talk to me about them. I'd love to expand my knowledge on this topic.

See you in the next post and thank you very much for reading! 👋

# Resources

You can download the full iOS project [here](https://jmgentili.gumroad.com/l/simulations-article-ios-code). Again: it's free, but you can choose to pay if you wish. If you do, know that you're creating an incentive for me to continue writing these types of posts (and making me a happier person, because I'll believe that my words are truly helping people out there 🙂).